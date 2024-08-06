import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Loader2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

import { isOrderExists } from '@/app/(root)/products/[productId]/purchase/_actions';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { formatCurrency } from '@/shared/lib/formatters';

type CheckoutFormProps = {
  priceInCents: number;
  productId: string;
};

const CheckoutForm = ({ priceInCents, productId }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) return;

    setIsLoading(true);

    const orderExists = await isOrderExists(email, productId);

    if (orderExists) {
      setErrorMessage(
        'You have already purchased this product. Try downloading it from the My Orders page'
      );
      setIsLoading(false);
      return;
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/success`,
        },
      })
      .then(({ error }) => {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An unknown error occurred');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">{errorMessage}</CardDescription>
          )}
        </CardHeader>

        <CardContent>
          <PaymentElement />
          <LinkAuthenticationElement onChange={(e) => setEmail(e.value.email)} />
        </CardContent>

        <CardFooter>
          <Button
            className="flex w-full gap-2"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            Purchase - {formatCurrency(priceInCents / 100)}
            {isLoading && <Loader2 className="size-4 animate-spin" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CheckoutForm;
