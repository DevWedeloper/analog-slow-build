import {
  AnyPgColumn,
  index,
  integer,
  pgTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const categories = pgTable(
  'categories',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    parentCategoryId: integer('parent_category_id').references(
      (): AnyPgColumn => categories.id,
      { onDelete: 'set null' },
    ),
  },
  (t) => [
    uniqueIndex('categories_name_idx').on(t.name),
    index('categories_parent_category_id_idx').on(t.parentCategoryId),
  ],
).enableRLS();
