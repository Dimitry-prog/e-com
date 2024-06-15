import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import ProductForm from '@/app/(protected)/admin/(pages)/products/_components/product-form';

type EditProductPageProps = {
  params: {
    productId: string;
  };
};

const EditProductPage = async ({ params: { productId } }: EditProductPageProps) => {
  const product = {
    id: 'test',
    name: 'test',
    description: 'test',
    isAvailableForPurchase: false,
    priceInCents: 0,
    countOrders: 2,
  };

  return (
    <>
      <AdminHeader title="Edit Product" />
      <ProductForm product={product} />
    </>
  );
};

export default EditProductPage;
