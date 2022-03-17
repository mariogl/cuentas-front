import axios from "axios";
import { Dispatch } from "react";
import { LoadCategoriesAction } from "../../types/actions";
import Category from "../../types/category";
import { loadCategoriesAction } from "../actions/categoriesActionCreators";

export const loadCategoriesThunk =
  () => async (dispatch: Dispatch<LoadCategoriesAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}categories`;
    const { data } = await axios.get<{ categories: Category[] }>(apiUrl, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
      },
    });
    dispatch(loadCategoriesAction(data.categories));
  };
