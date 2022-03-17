import { act } from "react-dom/test-utils";
import { randomCategories } from "../../factories/category";
import { LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import actionTypes from "./actionTypes";
import { loadCategoriesAction } from "./categoriesActionCreators";

describe("Given a loadCategoriesAction function", () => {
  describe("When it receives a list of categories", () => {
    test("Then it should return a load action with the list of categories", async () => {
      const categories: Category[] = randomCategories(2);

      const expectedAction: LoadCategoriesAction = {
        type: actionTypes.load,
        categories,
      };

      const action = loadCategoriesAction(categories);

      expect(action).toEqual(expectedAction);

      await act(() => Promise.resolve());
    });
  });
});
