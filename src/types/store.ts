import { TransactionsState } from "../redux/reducer/transactionsReducer";
import Category from "./category";

interface RootState {
  categories: Category[];
  transactions: TransactionsState;
}

export default RootState;
