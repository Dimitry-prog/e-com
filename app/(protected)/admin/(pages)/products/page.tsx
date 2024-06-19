import Link from 'next/link';

import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import { getTableProducts } from '@/app/(protected)/admin/(pages)/products/_actions/get-products';
import ProductsTable from '@/app/(protected)/admin/(pages)/products/_components/products-table';
import { ProductTableType } from '@/app/(protected)/admin/(pages)/products/_types';
import { Button } from '@/shared/components/ui/button';

const AdminProductsPage = async () => {
  const products: ProductTableType[] = await getTableProducts();

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
