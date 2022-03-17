import { LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import actionTypes from "./actionTypes";

export const loadCategoriesAction = (
  categories: Category[]
): LoadCategoriesAction => ({
  type: actionTypes.load,
  categories,
});
