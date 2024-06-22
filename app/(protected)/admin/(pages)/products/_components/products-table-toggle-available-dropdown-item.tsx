'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { toggleAvailabilityProduct } from '@/app/(protected)/admin/(pages)/products/_actions/toggle-availability-product';
import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu';

type ProductsTableToggleAvailableDropdownItemProps = {
  id: string;
  isAvailable: boolean;
};

const ProductsTableToggleAvailableDropdownItem = ({
  id,
  isAvailable,
}: ProductsTableToggleAvailableDropdownItemProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleAvailabilityProduct(id, !isAvailable);
          router.refresh();
        });
      }}
    >
      {isAvailable ? 'Deactivate' : 'Activate'}
    </DropdownMenuItem>
  );
};

export default ProductsTableToggleAvailableDropdownItem;
