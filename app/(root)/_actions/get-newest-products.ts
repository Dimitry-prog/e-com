'use server';

import { db } from '@/shared/lib/db';

export const getNewestProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 6,
  });

  return products;
};
