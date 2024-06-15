import { NextRequest } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params: productId }: { params: { productId: string } }
) => {};
