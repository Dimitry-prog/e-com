import { Suspense } from 'react';

import ProductSection from '@/app/(root)/products/components/product-section';
import ProductCardSkeleton from '@/shared/components/product-card-skeleton';

const ProductsPage = () => {
  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <ProductSection />
    </Suspense>
  );
};

export default ProductsPage;
