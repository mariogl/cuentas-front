import { Action } from "redux";
import {
  AddTagToTransactionAction,
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  SetTransactionsCategoryBulkAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Transaction from "../../types/transaction";
import transactionsActionTypes from "../actions/transactionsActionTypes";

export interface TransactionsState {
  list: Transaction[];
  expenses: number;
  income: number;
  sum: number;
  filterBy: string;
}

const transactionsReducer = (
  transactions: TransactionsState = {
    list: [],
    expenses: 0,
    income: 0,
    sum: 0,
    filterBy: "",
  },
  action: Action = { type: "" }
): TransactionsState => {
  let newTransactions: TransactionsState;

  switch (action.type) {
    case transactionsActionTypes.loadTransactions:
      newTransactions = {
        ...transactions,
        list: [...(action as LoadTransactionsAction).transactions],
        expenses: (action as LoadTransactionsAction).expenses,
        income: (action as LoadTransactionsAction).income,
        sum: (action as LoadTransactionsAction).sum,
      };
      break;
    case transactionsActionTypes.filterTransactions:
      newTransactions = {
        ...transactions,
        filterBy: (action as FilterTransactionsAction).filter,
      };
      break;
    case transactionsActionTypes.createTransaction:
      newTransactions = {
        ...transactions,
        list: [
          ...transactions.list,
          (action as CreateTransactionAction).transaction,
        ],
      };
      break;
    case transactionsActionTypes.updateTransaction:
      newTransactions = {
        ...transactions,
        list: transactions.list.map((transaction) =>
          transaction.id === (action as UpdateTransactionAction).transaction.id
            ? { ...(action as UpdateTransactionAction).transaction }
            : { ...transaction }
        ),
      };
      break;
    case transactionsActionTypes.deleteTransaction:
      newTransactions = {
        ...transactions,
        list: transactions.list.filter(
          (transaction) =>
            transaction.id !== (action as DeleteTransactionAction).id
        ),
      };
      break;
    case transactionsActionTypes.addTagToTransaction:
      newTransactions = {
        ...transactions,
        list: transactions.list.map((transaction) =>
          transaction.id === (action as AddTagToTransactionAction).transactionId
            ? {
                ...transaction,
                tags: [
                  ...transaction.tags,
                  (action as AddTagToTransactionAction).tag,
                ],
              }
            : { ...transaction }
        ),
      };
      break;

    case transactionsActionTypes.setTransactionsCategoryBulk:
      newTransactions = {
        ...transactions,
        list: transactions.list.map<Transaction>((transaction) =>
          (action as SetTransactionsCategoryBulkAction).transactions.includes(
            transaction.id
          )
            ? {
                ...transaction,
                category: (action as SetTransactionsCategoryBulkAction)
                  .category,
              }
            : { ...transaction }
        ),
      };
      break;

    default:
      newTransactions = transactions;
  }

  return newTransactions;
};

export default transactionsReducer;
