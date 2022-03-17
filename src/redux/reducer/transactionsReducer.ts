import { Action } from "redux";
import {
  CreateTransactionAction,
  DeleteTransactionAction,
  FilterTransactionsAction,
  LoadTransactionsAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Transaction from "../../types/transaction";
import transactionsActionTypes from "../actions/transactionsActionTypes";

export interface TransactionsState {
  list: Transaction[];
  filterBy: string;
}

const transactionsReducer = (
  transactions: TransactionsState = {
    list: [],
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
    default:
      newTransactions = transactions;
  }

  return newTransactions;
};

export default transactionsReducer;
