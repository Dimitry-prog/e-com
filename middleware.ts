import { NextRequest, NextResponse } from 'next/server';

import { isAuthenticated } from '@/shared/lib/auth';

export const middleware = async (req: NextRequest) => {
  if (!(await isAuthenticated(req))) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }
};

export const config = {
  matcher: '/admin/:path',
};
