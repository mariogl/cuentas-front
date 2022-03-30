import {
  AddTagToTransactionAction,
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  SetTransactionsCategoryBulkAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Category from "../../types/category";
import Tag from "../../types/tag";
import Transaction from "../../types/transaction";
import transactionsActionTypes from "./transactionsActionTypes";

export const loadTransactionsAction = (
  transactions: Transaction[],
  expenses: number,
  income: number,
  sum: number
): LoadTransactionsAction => ({
  type: transactionsActionTypes.loadTransactions,
  transactions,
  expenses,
  income,
  sum,
});

export const filterTransactionsAction = (
  filter = ""
): FilterTransactionsAction => ({
  type: transactionsActionTypes.filterTransactions,
  filter,
});

export const createTransactionAction = (
  transaction: Transaction
): CreateTransactionAction => ({
  type: transactionsActionTypes.createTransaction,
  transaction,
});

export const updateTransactionAction = (
  transaction: Transaction
): UpdateTransactionAction => ({
  type: transactionsActionTypes.updateTransaction,
  transaction,
});

export const deleteTransactionAction = (
  id: string
): DeleteTransactionAction => ({
  type: transactionsActionTypes.deleteTransaction,
  id,
});

export const addTagToTransactionAction = (
  transactionId: string,
  tag: Tag
): AddTagToTransactionAction => ({
  type: transactionsActionTypes.addTagToTransaction,
  tag,
  transactionId,
});

export const setTransactionsCategoryBulkAction = (
  category: Category,
  transactionsIds: string[]
): SetTransactionsCategoryBulkAction => ({
  type: transactionsActionTypes.setTransactionsCategoryBulk,
  category,
  transactions: transactionsIds,
});
