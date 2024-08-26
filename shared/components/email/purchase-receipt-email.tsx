import { Body, Container, Head, Heading, Html, Preview, Tailwind } from '@react-email/components';

import OrderInformation from '@/shared/components/email/order-information';
import { EmailType } from '@/shared/types/email-types';

PurchaseReceiptEmail.PreviewProps = {
  product: {
    name: 'Product name',
    description: 'Some description',
    imagePath: 'Product name',
  },
  order: {
    id: crypto.randomUUID(),
    pricePaidInCents: 10000,
    createdAt: new Date(),
  },
  downloadVerificationId: crypto.randomUUID(),
} satisfies EmailType;

export default function PurchaseReceiptEmail({
  product,
  order,
  downloadVerificationId,
}: EmailType) {
  return (
    <Html>
      <Preview>Download ${product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="max-w-xl">
            <Heading>Purchase Receipt</Heading>
            <OrderInformation
              product={product}
              order={order}
              downloadVerificationId={downloadVerificationId}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
