import { CheckCircle2, MoreVertical, XCircle } from 'lucide-react';
import Link from 'next/link';

import ProductsTableDeleteDropdownItem from '@/app/(protected)/admin/(pages)/products/_components/products-table-delete-dropdown-item';
import ProductsTableToggleAvailableDropdownItem from '@/app/(protected)/admin/(pages)/products/_components/products-table-toggle-available-dropdown-item';
import { ProductTableType } from '@/app/(protected)/admin/(pages)/products/_types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/shared/components/ui/table';
import { formatCurrency, formatNumber } from '@/shared/lib/formatters';

type ProductsTableRowProps = {
  product: ProductTableType;
};

const ProductsTableRow = ({ product }: ProductsTableRowProps) => {
  return (
    <TableRow>
      <TableCell>
        {product.isAvailableForPurchase ? (
          <>
            <CheckCircle2 />
            <span className="sr-only">Available For Purchase</span>
          </>
        ) : (
          <>
            <XCircle className="stroke-destructive" />
            <span className="sr-only">Unavailable For Purchase</span>
          </>
        )}
      </TableCell>

      <TableCell>{product.name}</TableCell>
      <TableCell>{formatCurrency(product.priceInCents)}</TableCell>
      <TableCell>{formatNumber(product._count.orders)}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
            <span className="sr-only">Actions</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href={`/admin/products/${product.id}/download`} download>
                Download
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
            </DropdownMenuItem>

            <ProductsTableToggleAvailableDropdownItem
              id={product.id}
              isAvailable={product.isAvailableForPurchase}
            />

            {product._count.orders === 0 && (
              <>
                <DropdownMenuSeparator />
                <ProductsTableDeleteDropdownItem id={product.id} />
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProductsTableRow;
