'use server';

import { db } from '@/shared/lib/db';

export const getSalesCount = async () => {
  const sales = await db.order.aggregate({
    _sum: {
      pricePaidInCents: true,
    },
    _count: true,
  });

  return {
    amount: (sales._sum.pricePaidInCents || 0) / 100,
    numberOfSales: sales._count,
  };
};
