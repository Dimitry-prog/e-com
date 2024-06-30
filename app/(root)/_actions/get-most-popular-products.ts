'use server';

import { db } from '@/shared/lib/db';

export const getMostPopularProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      orders: {
        _count: 'desc',
      },
    },
    take: 6,
  });

  return products;
};
