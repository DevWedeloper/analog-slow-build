import { client, db } from 'src/db';
import { categories } from 'src/db/schema';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  test: router({
    test: publicProcedure.query(
      async () => {
        const data = await db.select().from(categories).limit(1);
        return data;
      },
    ),
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
