import { NextRequest, NextResponse } from 'next/server';

import { getProductById } from '@/shared/actions/get-product-by-id';
import PurchaseReceiptEmail from '@/shared/components/email/purchase-receipt-email';
import { DOWNLOAD_TIME, STRIPE } from '@/shared/lib/constants';
import { db } from '@/shared/lib/db';
import { sendVerificationEmail } from '@/shared/lib/email';

export const POST = async (request: NextRequest) => {
  const body = await request.text();

  const sig = request.headers.get('stripe-signature') as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = STRIPE.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err });
  }

  const eventType = event.type;

  if (eventType === 'charge.succeeded') {
    const {
      metadata: { productId },
      billing_details: { email },
      amount,
    } = event.data.object;

    const product = await getProductById(productId);

    if (product == null || email == null) {
      return NextResponse.json({ message: 'Bad Request', status: 400 });
    }

    const userFields = {
      email,
      orders: {
        create: {
          productId,
          pricePaidInCents: amount,
        },
      },
    };

    const userOrders = await db.user.upsert({
      where: {
        email,
      },
      create: userFields,
      update: userFields,
      select: {
        orders: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });

    const downloadingVerification = await db.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + DOWNLOAD_TIME),
      },
    });

    await sendVerificationEmail(
      email,
      'Order Confirmation',
      <PurchaseReceiptEmail
        order={userOrders.orders[0]}
        product={product}
        downloadVerificationId={downloadingVerification.id}
      />
    );
  }

  return new Response('', { status: 200 });
};
