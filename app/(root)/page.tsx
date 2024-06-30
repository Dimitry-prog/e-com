import { Suspense } from 'react';

import { getMostPopularProducts } from '@/app/(root)/_actions/get-most-popular-products';
import { getNewestProducts } from '@/app/(root)/_actions/get-newest-products';
import ProductCardSkeleton from '@/shared/components/product-card-skeleton';
import ProductsGridSection from '@/shared/components/products-grid-section';

const Home = () => {
  return (
    <div className="space-y-10">
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductsGridSection title="Most Popular" fetcherProducts={getMostPopularProducts} />
      </Suspense>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductsGridSection title="Newest" fetcherProducts={getNewestProducts} />
      </Suspense>
    </div>
  );
};

export default Home;
