import { Product } from '@prisma/client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import ProductCard from '@/shared/components/product-card';
import { Button } from '@/shared/components/ui/button';

type ProductsGridSectionProps = {
  title: string;
  fetcherProducts: () => Promise<Product[]>;
};

const ProductsGridSection = async ({ title, fetcherProducts }: ProductsGridSectionProps) => {
  const products = await fetcherProducts();

  return (
    <section className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button asChild variant="outline">
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGridSection;
