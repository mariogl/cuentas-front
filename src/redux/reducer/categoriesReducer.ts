import { Action, LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import actionTypes from "../actions/actionTypes";

const categoriesReducer = (
  categories: Category[] = [],
  action: Action = { type: "" }
): Category[] => {
  let newCategories: Category[];

  switch (action.type) {
    case actionTypes.load:
      newCategories = [...(action as LoadCategoriesAction).categories];
      break;
    default:
      newCategories = [...categories];
  }

  return newCategories;
};

export default categoriesReducer;
