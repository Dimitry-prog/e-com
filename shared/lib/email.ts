import { ReactNode } from 'react';

import { RESEND } from '@/shared/lib/constants';

export const sendVerificationEmail = async (email: string, title: string, body: ReactNode) => {
  const data = await RESEND.emails.send({
    from: `Support <${process.env.SENDER_EMAIL}>`,
    to: email,
    subject: title,
    react: body,
  });

  return data;
};
