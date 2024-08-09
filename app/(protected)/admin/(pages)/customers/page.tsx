import AdminHeader from '@/app/(protected)/admin/_components/admin-header';
import { getTableCustomers } from '@/app/(protected)/admin/(pages)/customers/_actions/get-table-customers';
import UsersTable from '@/app/(protected)/admin/(pages)/customers/_components/users-table';

const AdminCustomersPage = async () => {
  const users = await getTableCustomers();

  return (
    <>
      <AdminHeader title="Customers" />
      {users.length > 0 ? <UsersTable users={users} /> : <p>No customers found</p>}
    </>
  );
};

export default AdminCustomersPage;
