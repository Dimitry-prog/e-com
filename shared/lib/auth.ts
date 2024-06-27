import { NextRequest } from 'next/server';

const isValidPassword = async (password: string, hashedPassword: string) => {
  const arrayBuffer = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(password));
  const hash = Buffer.from(arrayBuffer).toString('base64');
  return hashedPassword === hash;
};

export const isAuthenticated = async (req: NextRequest) => {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authHeader) return false;

  const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
    .toString()
    .split(':');

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(password, process.env.ADMIN_PASSWORD!))
  );
};
