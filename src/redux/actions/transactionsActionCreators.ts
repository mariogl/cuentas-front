import {
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Transaction from "../../types/transaction";
import categoriesActionTypes from "./categoriesActionTypes";

export const loadTransactionsAction = (
  transactions: Transaction[]
): LoadTransactionsAction => ({
  type: categoriesActionTypes.loadCategories,
  transactions,
});

export const filterTransactionsAction = (
  filter = ""
): FilterTransactionsAction => ({
  type: categoriesActionTypes.filterCategories,
  filter,
});

export const createTransactionAction = (
  transaction: Transaction
): CreateTransactionAction => ({
  type: categoriesActionTypes.createCategory,
  transaction,
});

export const updateTransactionAction = (
  transaction: Transaction
): UpdateTransactionAction => ({
  type: categoriesActionTypes.updateCategory,
  transaction,
});

export const deleteTransactionAction = (
  id: string
): DeleteTransactionAction => ({
  type: categoriesActionTypes.deleteCategory,
  id,
});
