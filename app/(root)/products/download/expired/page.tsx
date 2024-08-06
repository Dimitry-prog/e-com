import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

const ExpiredPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold">Download link expired</h1>

      <Button asChild size="lg">
        <Link href="/orders">Get New Link</Link>
      </Button>
    </section>
  );
};

export default ExpiredPage;
