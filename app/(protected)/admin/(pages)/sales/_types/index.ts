export type SalesTableType = {
  id: string;
  pricePaidInCents: number;
  product: {
    name: string;
  };
  user: {
    email: string;
  };
};
