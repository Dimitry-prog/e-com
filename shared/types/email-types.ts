export type EmailType = {
  order: EmailOrderType;
  product: EmailProductType;
  downloadVerificationId: string;
};

type EmailOrderType = {
  id: string;
  pricePaidInCents: number;
  createdAt: Date;
};

type EmailProductType = {
  name: string;
  description: string;
  imagePath: string;
};

export type EmailOrdersType = {
  orders: ({
    downloadVerificationId: string;
    product: EmailProductType;
  } & EmailOrderType)[];
};
