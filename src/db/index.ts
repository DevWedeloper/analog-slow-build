import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(import.meta.env['DATABASE_URL'], {
  idle_timeout: 5,
  ssl: true,
});
export const db = drizzle(client);
