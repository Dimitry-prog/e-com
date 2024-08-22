'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { deleteSalesById } from '@/app/(protected)/admin/(pages)/sales/_actions/delete-sales-by-id';
import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu';

type SalesTableDeleteDropdownItemProps = {
  saleId: string;
};

const SalesTableDeleteDropdownItem = ({ saleId }: SalesTableDeleteDropdownItemProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteSalesById(saleId);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};

export default SalesTableDeleteDropdownItem;
