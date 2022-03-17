import Category from "./category";
import Transaction from "./transaction";

export interface Action {
  type: string;
}
export interface LoadCategoriesAction extends Action {
  categories: Category[];
}

export interface LoadTransactionsAction extends Action {
  transactions: Transaction[];
}

export interface FilterTransactionsAction extends Action {
  filter: string;
}

export interface CreateTransactionAction extends Action {
  transaction: Transaction;
}

export interface UpdateTransactionAction extends Action {
  transaction: Transaction;
}

export interface DeleteTransactionAction extends Action {
  id: string;
}
