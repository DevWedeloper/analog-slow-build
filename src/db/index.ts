import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(import.meta.env['DATABASE_URL'], {
  max: 1,
});
export const db = drizzle(client);
