export type ProductTableType = {
  id: string;
  name: string;
  isAvailableForPurchase: boolean;
  priceInCents: number;
  _count: {
    orders: number;
  };
};
