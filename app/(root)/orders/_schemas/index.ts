import { z } from 'zod';

export const emailOrderHistorySchema = z.string().email();
