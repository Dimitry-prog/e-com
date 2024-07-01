import { Suspense } from 'react';

import { getProducts } from '@/app/(root)/products/_actions/get-products';
import ProductCardSkeleton from '@/shared/components/product-card-skeleton';
import ProductsGridSection from '@/shared/components/products-grid-section';

const ProductsPage = () => {
  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <ProductsGridSection title="Newest" fetcherProducts={getProducts} />
    </Suspense>
  );
};

export default ProductsPage;
