'use client';

import { Product } from '@prisma/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';

import CheckoutForm from '@/app/(root)/products/[productId]/purchase/_components/checkout-form';
import { formatCurrency } from '@/shared/lib/formatters';

type StripeWrapperProps = {
  product: Product;
  clientSecret: string;
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const StripeWrapper = ({ product, clientSecret }: StripeWrapperProps) => {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-8">
      <div className="flex items-center gap-4">
        <div className="relative aspect-video w-1/3 flex-shrink-0">
          <Image src={product.imagePath} alt={product.name} fill className="object-cover" />
        </div>

        <div>
          <p className="text-lg">{formatCurrency(product.priceInCents / 100)}</p>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="line-clamp-3 text-muted-foreground">{product.description}</p>
        </div>
      </div>

      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm priceInCents={product.priceInCents} productId={product.id} />
      </Elements>
    </section>
  );
};

export default StripeWrapper;
