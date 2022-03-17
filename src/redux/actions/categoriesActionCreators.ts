import { LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import categoriesActionTypes from "./categoriesActionTypes";

export const loadCategoriesAction = (
  categories: Category[]
): LoadCategoriesAction => ({
  type: categoriesActionTypes.loadCategories,
  categories,
});
