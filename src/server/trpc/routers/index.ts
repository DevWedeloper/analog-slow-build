import { db } from 'src/db';
import { categories } from 'src/db/schema';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  test: router({
    test: publicProcedure.query(
      async () => await db.select().from(categories).limit(1),
    ),
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
