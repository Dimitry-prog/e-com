'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/shared/lib/db';

export const deleteCustomersById = async (userId: string) => {
  await db.user.delete({
    where: {
      id: userId,
    },
  });

  revalidatePath('/');
  revalidatePath('/customers');
};
