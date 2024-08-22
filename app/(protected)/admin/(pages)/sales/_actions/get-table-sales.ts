'use server';

import { db } from '@/shared/lib/db';
import { cache } from '@/shared/lib/utils';

export const getTableSales = cache(async () => {
  const sales = db.order.findMany({
    select: {
      id: true,
      pricePaidInCents: true,
      product: {
        select: {
          name: true,
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return sales;
}, ['getTableSales']);
