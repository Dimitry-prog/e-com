import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Nav from '@/shared/components/nav';
import NavLink from '@/shared/components/nav-link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/orders">My Orders</NavLink>
        </Nav>
      </header>

      <main className="container my-6">{children}</main>
    </>
  );
}
