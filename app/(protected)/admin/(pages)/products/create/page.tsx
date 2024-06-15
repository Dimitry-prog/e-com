import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import ProductForm from '@/app/(protected)/admin/(pages)/products/_components/product-form';

const CreateProductPage = () => {
  return (
    <>
      <AdminHeader title="Create Product" />
      <ProductForm />
    </>
  );
};

export default CreateProductPage;
