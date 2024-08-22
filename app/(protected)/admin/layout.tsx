import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Nav from '@/shared/components/nav';
import NavLink from '@/shared/components/nav-link';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin page',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header>
        <Nav>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/products">Products</NavLink>
          <NavLink href="/admin/customers">Customers</NavLink>
          <NavLink href="/admin/sales">Sales</NavLink>
        </Nav>
      </header>
      <main className="container my-6">{children}</main>
    </>
  );
}
