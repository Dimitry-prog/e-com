'use client';

import { useFormState } from 'react-dom';

import { emailOrderHistory } from '@/app/(root)/orders/_actions/email-order-history';
import SubmitButton from '@/shared/components/submit-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

const MyOrdersPage = () => {
  const [data, action] = useFormState(emailOrderHistory, {});

  return (
    <form action={action} className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
          <CardDescription>
            Enter your email and we will send you your order history and download links
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" placeholder="Email" required id="email" />

            {data.error && <div className="text-destructive">{data.error}</div>}
          </div>
        </CardContent>

        <CardFooter>
          {data.message ? (
            <p className="text-xl">{data.message}</p>
          ) : (
            <SubmitButton text="Send" className="w-full" />
          )}
        </CardFooter>
      </Card>
    </form>
  );
};

export default MyOrdersPage;
