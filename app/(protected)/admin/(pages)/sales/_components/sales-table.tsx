import SalesTableRow from '@/app/(protected)/admin/(pages)/sales/_components/sales-table-row';
import { SalesTableType } from '@/app/(protected)/admin/(pages)/sales/_types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

type SalesTableProps = {
  sales: SalesTableType[];
};

const SalesTable = ({ sales }: SalesTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Price Paid</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {sales.map((sale) => (
          <SalesTableRow sale={sale} key={sale.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default SalesTable;
