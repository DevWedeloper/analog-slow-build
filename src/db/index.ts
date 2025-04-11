import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(import.meta.env['DATABASE_URL'], {
  connection: {
    idle_in_transaction_session_timeout: 1000,
    idle_session_timeout: 1000,
  },
});
export const db = drizzle(client);
