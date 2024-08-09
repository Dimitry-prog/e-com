'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { deleteCustomersById } from '@/app/(protected)/admin/(pages)/customers/_actions/delete-customers-by-id';
import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu';

type UsersTableDeleteDropdownItemProps = {
  userId: string;
};

const UsersTableDeleteDropdownItem = ({ userId }: UsersTableDeleteDropdownItemProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteCustomersById(userId);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};

export default UsersTableDeleteDropdownItem;
