import { Action, LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import categoriesActionTypes from "../actions/categoriesActionTypes";

const categoriesReducer = (
  categories: Category[] = [],
  action: Action = { type: "" }
): Category[] => {
  let newCategories: Category[];

  if (action.type === categoriesActionTypes.loadCategories) {
    newCategories = [...(action as LoadCategoriesAction).categories];
  } else {
    newCategories = [...categories];
  }

  return newCategories;
};

export default categoriesReducer;
