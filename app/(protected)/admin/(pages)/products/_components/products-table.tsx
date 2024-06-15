import ProductsTableRow from '@/app/(protected)/admin/(pages)/products/_components/products-table-row';
import { ProductTableType } from '@/app/(protected)/admin/(pages)/products/_types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

type ProductsTableProps = {
  products: ProductTableType[];
};

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <ProductsTableRow product={product} key={product.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
