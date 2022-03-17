import axios from "axios";
import { randomCategories } from "../../factories/category";
import Category from "../../types/category";
import { loadCategoriesThunk } from "./categoriesThunks";

jest.mock("axios");

describe("Given a loadCategoriesThunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should invoke dispatch with a load categories action with a list of categories", async () => {
      const dispatch = jest.fn();
      const categories: Category[] = randomCategories();

      axios.get = jest.fn().mockResolvedValue({ data: { categories } });

      const actualThunk = loadCategoriesThunk();
      await actualThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
