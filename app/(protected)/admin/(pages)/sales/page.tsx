import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import { getTableSales } from '@/app/(protected)/admin/(pages)/sales/_actions/get-table-sales';
import SalesTable from '@/app/(protected)/admin/(pages)/sales/_components/sales-table';

const AdminCustomersPage = async () => {
  const sales = await getTableSales();

  return (
    <>
      <AdminHeader title="Sales" />
      {sales.length > 0 ? <SalesTable sales={sales} /> : <p>No sales found</p>}
    </>
  );
};

export default AdminCustomersPage;
