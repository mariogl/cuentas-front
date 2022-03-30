import Category from "./category";
import Tag from "./tag";
import Transaction from "./transaction";

export interface Action {
  type: string;
}
export interface LoadCategoriesAction extends Action {
  categories: Category[];
}

export interface LoadTransactionsAction extends Action {
  transactions: Transaction[];
  expenses: number;
  income: number;
  sum: number;
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

export interface AddTagToTransactionAction extends Action {
  transactionId: string;
  tag: Tag;
}
export interface DeleteTransactionAction extends Action {
  id: string;
}

export interface SetTransactionsCategoryBulkAction extends Action {
  category: Category;
  transactions: string[];
}
