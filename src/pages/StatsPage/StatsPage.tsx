import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search/Search";
import StatsPeriod from "../../components/StatsPeriod/StatsPeriod";
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
      <StatsPeriod
        type="month"
        transactions={transactionsList}
        totalSum={sum}
        totalExpenses={expenses}
        totalIncome={income}
      />
    </>
  );
};

export default StatsPage;
