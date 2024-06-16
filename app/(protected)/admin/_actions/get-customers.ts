'use server';

import { db } from '@/shared/lib/db';

export const getAverageValuePerCustomer = async () => {
  const [customersCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: {
        pricePaidInCents: true,
      },
    }),
  ]);

  return {
    customersCount,
    averageValue:
      customersCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / customersCount / 100,
  };
};
