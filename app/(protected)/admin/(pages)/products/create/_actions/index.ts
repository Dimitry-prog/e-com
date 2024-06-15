'use server';

import { createProductSchema } from '@/app/(protected)/admin/(pages)/products/create/_schemas';

export const createProduct = async (prevState: unknown, formData: FormData) => {
  const validatedFields = createProductSchema.safeParse(Object.fromEntries(formData));

  if (validatedFields.error) {
    return validatedFields.error.formErrors.fieldErrors;
  }

  const data = validatedFields.data;
};
