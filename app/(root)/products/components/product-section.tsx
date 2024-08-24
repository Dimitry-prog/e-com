import { getProducts } from '@/app/(root)/products/_actions/get-products';
import ProductCard from '@/shared/components/product-card';

const ProductSection = async () => {
  const products = await getProducts();

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
