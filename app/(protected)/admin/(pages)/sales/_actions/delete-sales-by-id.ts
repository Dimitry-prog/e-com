'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/shared/lib/db';

export const deleteSalesById = async (saleId: string) => {
  await db.user.delete({
    where: {
      id: saleId,
    },
  });

  revalidatePath('/');
  revalidatePath('/sales');
};
