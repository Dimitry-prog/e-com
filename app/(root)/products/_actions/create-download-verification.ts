'use server';

import { DOWNLOAD_TIME } from '@/shared/lib/constants';
import { db } from '@/shared/lib/db';

export const createDownloadVerification = async (productId: string) => {
  const verification = await db.downloadVerification.create({
    data: {
      productId,
      expiresAt: new Date(Date.now() + DOWNLOAD_TIME),
    },
  });

  return verification.id;
};
