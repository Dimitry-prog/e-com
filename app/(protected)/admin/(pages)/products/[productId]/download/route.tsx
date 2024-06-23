import fs from 'fs/promises';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '@/shared/lib/db';

export const GET = async (
  req: NextRequest,
  { params: { productId } }: { params: { productId: string } }
) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      filePath: true,
      name: true,
    },
  });

  if (product == null) return notFound();

  const { size } = await fs.stat(product.filePath);
  const file = await fs.readFile(product.filePath);
  const extension = product.filePath.split('.').pop();

  return new NextResponse(file, {
    headers: {
      'Content-Disposition': `attachment; filename="${product.name}.${extension}"`,
      'Content-Length': size.toString(),
    },
  });
};
