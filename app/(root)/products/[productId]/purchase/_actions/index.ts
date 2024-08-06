'use server';

import { db } from '@/shared/lib/db';

export const isOrderExists = async (email: string, productId: string) => {
  const order = await db.order.findFirst({
    where: {
      user: {
        email,
      },
      productId,
    },
    select: {
      id: true,
    },
  });

  return order != null;
};
