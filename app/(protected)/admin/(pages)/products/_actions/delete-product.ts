'use server';

import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';

import { db } from '@/shared/lib/db';

export const deleteProduct = async (id: string) => {
  const product = await db.product.delete({
    where: {
      id,
    },
  });

  await fs.unlink(product.filePath);
  await fs.unlink(`public${product.imagePath}`);

  revalidatePath('/');
  revalidatePath('/products');
};
