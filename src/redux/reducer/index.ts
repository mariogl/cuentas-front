import { combineReducers } from "redux";
import RootState from "../../types/store";
import categoriesReducer from "./categoriesReducer";
import transactionsReducer from "./transactionsReducer";

const rootReducer = combineReducers<RootState>({
  categories: categoriesReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
