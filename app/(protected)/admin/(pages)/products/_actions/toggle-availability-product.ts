'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/shared/lib/db';

export const toggleAvailabilityProduct = async (id: string, isAvailable: boolean) => {
  const product = await db.product.update({
    where: {
      id,
    },
    data: {
      isAvailableForPurchase: isAvailable,
    },
  });

  revalidatePath('/');
  revalidatePath('/products');
};
