import { MoreVertical } from 'lucide-react';

import UsersTableDeleteDropdownItem from '@/app/(protected)/admin/(pages)/customers/_components/users-table-delete-dropdown-item';
import { CustomersTableType } from '@/app/(protected)/admin/(pages)/customers/_types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/shared/components/ui/table';
import { formatCurrency, formatNumber } from '@/shared/lib/formatters';

type UsersTableRowProps = {
  user: CustomersTableType;
};

const UsersTableRow = ({ user }: UsersTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{user.email}</TableCell>
      <TableCell>{formatNumber(user.orders.length)}</TableCell>
      <TableCell>
        {formatCurrency(user.orders.reduce((sum, order) => order.pricePaidInCents + sum, 0))}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
            <span className="sr-only">Actions</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <UsersTableDeleteDropdownItem userId={user.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default UsersTableRow;
