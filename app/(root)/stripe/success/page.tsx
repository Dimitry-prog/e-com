import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { createDownloadVerification } from '@/app/(root)/_actions/create-download-verification';
import { getProductById } from '@/shared/actions/get-product-by-id';
import { Button } from '@/shared/components/ui/button';
import { STRIPE } from '@/shared/lib/constants';
import { formatCurrency } from '@/shared/lib/formatters';

type StripeSuccessPageProps = {
  searchParams: {
    payment_intent: string;
  };
};

const StripeSuccessPage = async ({ searchParams: { payment_intent } }: StripeSuccessPageProps) => {
  const paymentIntent = await STRIPE.paymentIntents.retrieve(payment_intent);

  if (paymentIntent.metadata.productId == null) return notFound();

  const product = await getProductById(paymentIntent.metadata.productId);

  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === 'succeeded';

  const verificationId = await createDownloadVerification(product.id);

  return (
    <section className="mx-auto w-full max-w-5xl space-y-8">
      <h1 className="text-4xl font-bold">{isSuccess ? 'Success!' : 'Error'}</h1>

      <div className="flex items-center gap-4">
        <div className="relative aspect-video w-1/3 flex-shrink-0">
          <Image src={product.imagePath} alt={product.name} fill className="object-cover" />
        </div>

        <div>
          <p className="text-lg">{formatCurrency(product.priceInCents / 100)}</p>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="line-clamp-3 text-muted-foreground">{product.description}</p>
        </div>
      </div>

      <Button className="mt-4" size="lg" asChild>
        {isSuccess ? (
          <a href={`/products/download/${verificationId}`}>Download</a>
        ) : (
          <Link href={`/products/${product.id}/purchase`}>Try again</Link>
        )}
      </Button>
    </section>
  );
};

export default StripeSuccessPage;
