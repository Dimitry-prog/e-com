import { Button, Column, Img, Row, Text } from '@react-email/components';
import { Section } from '@react-email/section';

import { formatCurrency, formatDateTime } from '@/shared/lib/formatters';
import { EmailType } from '@/shared/types/email-types';

const OrderInformation = ({ order, product, downloadVerificationId }: EmailType) => {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className="mb-0 whitespace-nowrap text-nowrap text-gray-500">Order ID</Text>
            <Text className="mr-4 mt-0">{order.id}</Text>
          </Column>
          <Column>
            <Text className="mb-0 whitespace-nowrap text-nowrap text-gray-500">Purchased On</Text>
            <Text className="mr-4 mt-0">{formatDateTime(order.createdAt).dateOnly}</Text>
          </Column>
          <Column>
            <Text className="mb-0 whitespace-nowrap text-nowrap text-gray-500">Price Paid</Text>
            <Text className="mr-4 mt-0">{formatCurrency(order.pricePaidInCents / 100)}</Text>
          </Column>
        </Row>
      </Section>
      <Section className="space-y-8 rounded-lg border border-solid border-gray-500 p-4 md:p-6">
        <Img
          width="100%"
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.imagePath}`}
          alt={product.name}
        />
        <Row>
          <Column className="align-bottom">
            <Text className="m-0 mr-4 text-lg font-bold">{product.name}</Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text className="m-0 text-gray-500">{product.description}</Text>
          </Column>
          <Column align="right">
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/products/download/${downloadVerificationId}`}
              className="rounded-lg bg-black px-6 py-4 text-lg text-white"
            >
              Download
            </Button>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default OrderInformation;
