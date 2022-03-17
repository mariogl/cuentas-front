import { randomCategories } from "../../factories/category";
import { Action, LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import actionTypes from "../actions/actionTypes";
import categoriesReducer from "./categoriesReducer";

describe("Given a categoriesReducer function", () => {
  describe("When it receives a load action with a list of categories", () => {
    test("Then it should return the received list of categories", () => {
      const initialCategories: Category[] = [];
      const newCategories: Category[] = randomCategories();
      const action: LoadCategoriesAction = {
        type: actionTypes.load,
        categories: newCategories,
      };

      const newState = categoriesReducer(initialCategories, action);

      expect(newState).toEqual(newCategories);
    });
  });

  describe("When it receives an unknown action", () => {
    test("Then it should return the previous list of categories", () => {
      const initialCategories: Category[] = randomCategories();
      const action: Action = {
        type: "test",
      };

      const newState = categoriesReducer(initialCategories, action);

      expect(newState).toEqual(initialCategories);
    });
  });

  describe("When it receives nothing", () => {
    test("Then it should return an empty list", () => {
      const newState = categoriesReducer();
      const expectedState: Category[] = [];

      expect(newState).toEqual(expectedState);
    });
  });
});
