import { Categories } from 'src/db/schema';

export type CategoryWithSubcategories = Categories & {
  subcategories: CategoryWithSubcategories[];
};

export const getCategoryTree = async (): Promise<
  CategoryWithSubcategories[]
> => {
  return [];
};
