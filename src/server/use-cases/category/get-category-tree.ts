import { getAllCategories } from 'src/db/data-access/category/get-all-categories';
import { Categories } from 'src/db/schema';

export type CategoryWithSubcategories = Categories & {
  subcategories: CategoryWithSubcategories[];
};

export const getCategoryTree = async (): Promise<
  CategoryWithSubcategories[]
> => {
  console.time('getAllCategories');
  const categoriesData = await getAllCategories();
  console.timeEnd('getAllCategories');

  console.time('buildCategoryTree');

  const buildCategoryTree = (
    categories: Categories[],
    parentId: number | null = null,
  ): CategoryWithSubcategories[] => {
    return categories
      .filter((category) => category.parentCategoryId === parentId)
      .map((category) => ({
        ...category,
        subcategories: buildCategoryTree(categories, category.id),
      }));
  };

  const categoryTree = buildCategoryTree(categoriesData);

  console.timeEnd('buildCategoryTree');

  return categoryTree;
};
