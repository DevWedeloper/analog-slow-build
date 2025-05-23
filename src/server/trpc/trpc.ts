import { initTRPC } from '@trpc/server';
import { SuperJSON } from 'superjson';
import { Context } from './context';

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
