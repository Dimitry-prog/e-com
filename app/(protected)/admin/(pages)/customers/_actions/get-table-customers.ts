'use server';

import { db } from '@/shared/lib/db';
import { cache } from '@/shared/lib/utils';

export const getTableCustomers = cache(async () => {
  const customers = db.user.findMany({
    select: {
      id: true,
      email: true,
      orders: {
        select: {
          pricePaidInCents: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return customers;
}, ['getTableCustomers']);
