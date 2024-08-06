import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import ProductForm from '@/app/(protected)/admin/(pages)/products/_components/product-form';
import { getProductById } from '@/shared/actions/get-product-by-id';

type EditProductPageProps = {
  params: {
    productId: string;
  };
};

const EditProductPage = async ({ params: { productId } }: EditProductPageProps) => {
  const product = await getProductById(productId);

  return (
    <>
      <AdminHeader title="Edit Product" />
      <ProductForm product={product} />
    </>
  );
};

export default EditProductPage;
