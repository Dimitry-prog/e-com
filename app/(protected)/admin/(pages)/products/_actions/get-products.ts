'use server';

import { db } from '@/shared/lib/db';

export const getTableProducts = async () => {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: 'asc' },
  });

  return products;
};
