import {
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Transaction from "../../types/transaction";
import actionTypes from "./actionTypes";

export const loadTransactionsAction = (
  transactions: Transaction[]
): LoadTransactionsAction => ({
  type: actionTypes.load,
  transactions,
});

export const filterTransactionsAction = (
  filter = ""
): FilterTransactionsAction => ({
  type: actionTypes.filter,
  filter,
});

export const createTransactionAction = (
  transaction: Transaction
): CreateTransactionAction => ({
  type: actionTypes.create,
  transaction,
});

export const updateTransactionAction = (
  transaction: Transaction
): UpdateTransactionAction => ({
  type: actionTypes.update,
  transaction,
});

export const deleteTransactionAction = (
  id: string
): DeleteTransactionAction => ({
  type: actionTypes.delete,
  id,
});
