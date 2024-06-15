import Link from 'next/link';

import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import ProductsTable from '@/app/(protected)/admin/(pages)/products/_components/products-table';
import { ProductTableType } from '@/app/(protected)/admin/(pages)/products/_types';
import { Button } from '@/shared/components/ui/button';

const AdminProductsPage = async () => {
  const products: ProductTableType[] = [
    {
      id: 'test',
      name: 'test',
      isAvailableForPurchase: false,
      priceInCents: 0,
      countOrders: 2,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <AdminHeader title="Products" />

        <Button asChild>
          <Link href="/admin/products/create">Create Product</Link>
        </Button>
      </div>

      {products.length > 0 ? <ProductsTable products={products} /> : <p>No products found</p>}
    </>
  );
};

export default AdminProductsPage;
