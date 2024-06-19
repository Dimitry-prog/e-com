import { fileSchema, imageSchema } from '@/app/(protected)/admin/(pages)/products/_schemas';
import { createProductSchema } from '@/app/(protected)/admin/(pages)/products/create/_schemas';

export const editProductSchema = createProductSchema.extend({
  file: fileSchema.optional(),
  image: imageSchema.optional(),
});
