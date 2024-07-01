'use server';

import { db } from '@/shared/lib/db';

export const getProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
  });

  return products;
};
