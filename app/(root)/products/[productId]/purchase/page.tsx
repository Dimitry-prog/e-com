import { notFound } from 'next/navigation';

import StripeWrapper from '@/app/(root)/products/[productId]/purchase/_components/stripe-wrapper';
import { getProductById } from '@/shared/actions/get-product-by-id';
import { STRIPE } from '@/shared/lib/constants';

type PurchasePageProps = {
  params: {
    productId: string;
  };
};

const PurchasePage = async ({ params: { productId } }: PurchasePageProps) => {
  const product = await getProductById(productId);

  if (!product) notFound();

  const paymentIntent = await STRIPE.paymentIntents.create({
    amount: product.priceInCents,
    currency: 'USD',
    metadata: { productId: product.id },
  });

  if (paymentIntent.client_secret == null) {
    throw new Error('Stripe failed to create payment intent');
  }

  return <StripeWrapper product={product} clientSecret={paymentIntent.client_secret} />;
};

export default PurchasePage;
