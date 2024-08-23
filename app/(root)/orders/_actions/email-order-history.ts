'use server';

import { createDownloadVerification } from '@/app/(root)/_actions/create-download-verification';
import { emailOrderHistorySchema } from '@/app/(root)/orders/_schemas';
import { RESEND } from '@/shared/lib/constants';
import { db } from '@/shared/lib/db';

export const emailOrderHistory = async (
  prevState: unknown,
  formData: FormData
): Promise<{
  message?: string;
  error?: string;
}> => {
  const validateFields = emailOrderHistorySchema.safeParse(formData.get('email'));

  if (!validateFields) {
    return {
      error: 'Invalid email address',
    };
  }

  const user = await db.user.findUnique({
    where: {
      email: validateFields.data,
    },
    select: {
      email: true,
      orders: {
        select: {
          id: true,
          pricePaidInCents: true,
          createdAt: true,
          product: {
            select: {
              id: true,
              name: true,
              imagePath: true,
              description: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return {
      message: 'Check your email to view your order history',
    };
  }

  const orders = user.orders.map(async (order) => ({
    ...order,
    downloadVerificationId: await createDownloadVerification(order.product.id),
  }));

  const data = await RESEND.emails.send({
    from: `Support <${process.env.SENDER_EMAIL}>`,
    to: user.email,
    subject: 'Order History',
    react: 'teyre',
  });

  if (data.error) {
    return {
      error: 'There was an error sending your email. Please try again.',
    };
  }

  return {
    message: 'Check your email to view your order history and download your products.',
  };
};
