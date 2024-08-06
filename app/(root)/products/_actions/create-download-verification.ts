'use server';

import { db } from '@/shared/lib/db';

export const createDownloadVerification = async (productId: string) => {
  const verification = await db.downloadVerification.create({
    data: {
      productId,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
  });

  return verification.id;
};
