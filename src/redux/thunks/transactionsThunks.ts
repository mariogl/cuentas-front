import axios from "axios";
import { Dispatch } from "react";
import {
  AddTagToTransactionAction,
  CreateTransactionAction,
  DeleteTransactionAction,
  LoadTransactionsAction,
  UpdateTransactionAction,
} from "../../types/actions";
import Tag from "../../types/tag";
import Transaction from "../../types/transaction";
import {
  addTagToTransactionAction,
  createTransactionAction,
  deleteTransactionAction,
  loadTransactionsAction,
  updateTransactionAction,
} from "../actions/transactionsActionCreators";

export const loadTransactionsThunk =
  () => async (dispatch: Dispatch<LoadTransactionsAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}transactions`;
    const { data } = await axios.get<{ transactions: Transaction[] }>(apiUrl, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
      },
    });
    dispatch(loadTransactionsAction(data.transactions));
  };

export const createTransactionThunk =
  (transaction: Transaction) =>
  async (dispatch: Dispatch<CreateTransactionAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}transactions`;
    const { data } = await axios.post<{ transaction: Transaction }>(
      apiUrl,
      transaction,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
        },
      }
    );
    dispatch(createTransactionAction(data.transaction));
  };

export const updateTransactionThunk =
  (transaction: Transaction) =>
  async (dispatch: Dispatch<UpdateTransactionAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}transactions/${transaction.id}`;
    const { data } = await axios.put<{ transaction: Transaction }>(
      apiUrl,
      transaction,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
        },
      }
    );
    dispatch(updateTransactionAction(data.transaction));
  };

export const addTagToTransactionThunk =
  (transactionId: string, tag: Tag) =>
  async (dispatch: Dispatch<AddTagToTransactionAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}transactions/tag`;
    await axios.post<{ transaction: Transaction }>(
      apiUrl,
      {
        transactionId,
        tagId: tag.id,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
        },
      }
    );
    dispatch(addTagToTransactionAction(transactionId, tag));
  };

export const deleteTransactionThunk =
  (id: string) => async (dispatch: Dispatch<DeleteTransactionAction>) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}transactions/${id}`;
    await axios.delete<{}>(apiUrl, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
      },
    });
    dispatch(deleteTransactionAction(id));
  };
