export type CustomersTableType = {
  id: string;
  email: string;
  orders: {
    pricePaidInCents: number;
  }[];
};
