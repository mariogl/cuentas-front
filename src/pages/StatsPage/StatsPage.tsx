import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeriodsFilters from "../../components/PeriodsFilters/PeriodsFilters";
import Search from "../../components/Search/Search";
import StatsPeriod from "../../components/StatsPeriod/StatsPeriod";
import { TransactionsState } from "../../redux/reducer/transactionsReducer";
import { loadTransactionsThunk } from "../../redux/thunks/transactionsThunks";
import Periods from "../../types/periods";
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

  const [filters, setFilters] = useState<{
    years: boolean;
    quarters: boolean;
    months: boolean;
  }>({
    years: false,
    quarters: false,
    months: true,
  });

  const changeFilter = (event: SyntheticEvent) => {
    const id = (event.target as HTMLButtonElement).id;
    const value = (filters as any)[id];
    setFilters({
      ...filters,
      [id]: !value,
    });
  };

  return (
    <>
      <Search />
      <PeriodsFilters filters={filters} changeFilter={changeFilter} />
      {filters.years && (
        <StatsPeriod
          type={Periods.years}
          transactions={transactionsList}
          totalSum={sum}
          totalExpenses={expenses}
          totalIncome={income}
        />
      )}
      {filters.quarters && (
        <StatsPeriod
          type={Periods.quarters}
          transactions={transactionsList}
          totalSum={sum}
          totalExpenses={expenses}
          totalIncome={income}
        />
      )}
      {filters.months && (
        <StatsPeriod
          type={Periods.months}
          transactions={transactionsList}
          totalSum={sum}
          totalExpenses={expenses}
          totalIncome={income}
        />
      )}
    </>
  );
};

export default StatsPage;
