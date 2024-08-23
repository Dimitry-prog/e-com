import { Resend } from 'resend';
import Stripe from 'stripe';

export const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0,
});

export const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

export const STRIPE = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const DOWNLOAD_TIME = 1000 * 60 * 60 * 24;

export const RESEND = new Resend(process.env.RESEND_API_KEY!);
