'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { deleteProduct } from '@/app/(protected)/admin/(pages)/products/_actions/delete-product';
import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu';

type ProductsTableDeleteDropdownItemProps = {
  id: string;
};

const ProductsTableDeleteDropdownItem = ({ id }: ProductsTableDeleteDropdownItemProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};

export default ProductsTableDeleteDropdownItem;
