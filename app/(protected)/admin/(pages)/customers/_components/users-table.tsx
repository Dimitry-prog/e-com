import UsersTableRow from '@/app/(protected)/admin/(pages)/customers/_components/users-table-row';
import { CustomersTableType } from '@/app/(protected)/admin/(pages)/customers/_types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

type UsersTableProps = {
  users: CustomersTableType[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Value</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <UsersTableRow user={user} key={user.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
