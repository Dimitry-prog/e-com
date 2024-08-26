import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components';
import { Fragment } from 'react';

import OrderInformation from '@/shared/components/email/order-information';
import { EmailOrdersType } from '@/shared/types/email-types';

OrdersHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      pricePaidInCents: 10000,
      createdAt: new Date(),
      downloadVerificationId: crypto.randomUUID(),
      product: {
        name: 'Product name',
        description: 'Some description',
        imagePath: 'Product name',
      },
    },
    {
      id: crypto.randomUUID(),
      pricePaidInCents: 40000,
      createdAt: new Date(),
      downloadVerificationId: crypto.randomUUID(),
      product: {
        name: 'Product name ver 2',
        description: 'Some description ver 2',
        imagePath: 'Product name',
      },
    },
  ],
} satisfies EmailOrdersType;

export default function OrdersHistoryEmail({ orders }: EmailOrdersType) {
  return (
    <Html>
      <Preview>Order History and Downloads </Preview>
      <Tailwind>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="max-w-xl">
            <Heading>Order History</Heading>
            {orders.map((order, index) => (
              <Fragment key={order.id}>
                <OrderInformation
                  product={order.product}
                  order={order}
                  downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
