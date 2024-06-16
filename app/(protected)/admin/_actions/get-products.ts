'use server';

import { db } from '@/shared/lib/db';

export const getProductsCount = async () => {
  const products = await db.product.findMany();

  const activeCount = products.filter((product) => product.isAvailableForPurchase).length;
  const inactiveCount = products.filter((product) => !product.isAvailableForPurchase).length;

  return {
    activeCount,
    inactiveCount,
  };
};
