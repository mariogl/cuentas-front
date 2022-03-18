import {
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Transaction from "../../types/transaction";
import transactionsActionTypes from "./transactionsActionTypes";

export const loadTransactionsAction = (
  transactions: Transaction[]
): LoadTransactionsAction => ({
  type: transactionsActionTypes.loadTransactions,
  transactions,
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
