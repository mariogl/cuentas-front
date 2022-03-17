import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import RootState from "../../types/store";
import { loadTransactionsThunk } from "../../redux/thunks/transactionsThunks";
import Transaction from "../../types/transaction";
import { TransactionsState } from "../../redux/reducer/transactionsReducer";

const TransactionsListPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { list: transactionsList, filterBy }: TransactionsState = useSelector(
    (state: RootState) => state.transactions
  );

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(
      filterBy
        ? transactionsList.filter(
            (transaction) => transaction.category === filterBy
          )
        : transactionsList
    );
  }, [filterBy, transactionsList]);

  useEffect(() => {
    dispatch(loadTransactionsThunk());
  }, [dispatch]);

  return <TransactionsList transactions={transactions} />;
};

export default TransactionsListPage;
