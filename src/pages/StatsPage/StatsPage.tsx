import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Monthly from "../../components/Monthly/Monthly";
import Search from "../../components/Search/Search";
import { TransactionsState } from "../../redux/reducer/transactionsReducer";
import { loadTransactionsThunk } from "../../redux/thunks/transactionsThunks";
import RootState from "../../types/store";

const StatsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    list: transactionsList,
    sum,
    expenses,
    income,
  }: TransactionsState = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    dispatch(loadTransactionsThunk());
  }, [dispatch]);

  return (
    <>
      <Search />
      <Monthly
        transactions={transactionsList}
        totalSum={sum}
        totalExpenses={expenses}
        totalIncome={income}
      />
    </>
  );
};

export default StatsPage;
