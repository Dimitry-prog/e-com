import { MoreVertical } from 'lucide-react';

import SalesTableDeleteDropdownItem from '@/app/(protected)/admin/(pages)/sales/_components/sales-table-delete-dropdown-item';
import { SalesTableType } from '@/app/(protected)/admin/(pages)/sales/_types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/shared/components/ui/table';
import { formatCurrency } from '@/shared/lib/formatters';

type SalesTableRowProps = {
  sale: SalesTableType;
};

const SalesTableRow = ({ sale }: SalesTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{sale.product.name}</TableCell>
      <TableCell>{sale.user.email}</TableCell>
      <TableCell>{formatCurrency(sale.pricePaidInCents / 100)}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
            <span className="sr-only">Actions</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <SalesTableDeleteDropdownItem saleId={sale.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default SalesTableRow;
