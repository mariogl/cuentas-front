import { getMonth, getQuarter, getYear } from "date-fns";
import { Fragment } from "react";
import monthsNames from "../../dateUtils/dateUtils";
import Periods from "../../types/periods";
import Transaction from "../../types/transaction";
import TotalsFooter from "../TotalsFooter/TotalsFooter";

interface StatsPeriodProps {
  type: Periods;
  transactions: Transaction[];
  totalSum: number;
  totalIncome: number;
  totalExpenses: number;
}

interface PeriodInfo {
  name: string;
  index: number;
  expenses: number;
  income: number;
  sum: number;
}

const StatsPeriod = ({
  type,
  transactions,
  totalSum,
  totalIncome,
  totalExpenses,
}: StatsPeriodProps): JSX.Element => {
  const periodInfo: PeriodInfo[] = transactions.reduce(
    (info: PeriodInfo[], transaction) => {
      const periodNumber =
        type === Periods.years
          ? getYear(transaction.date)
          : type === Periods.months
          ? getMonth(transaction.date)
          : getQuarter(transaction.date);
      const periodName =
        type === Periods.months ? monthsNames[periodNumber] : `${periodNumber}`;
      if (info.find((infoObject) => infoObject.name === periodName)) {
        return info.map((infoObject) =>
          infoObject.name === periodName
            ? {
                ...infoObject,
                sum: infoObject.sum + transaction.quantity,
                expenses:
                  transaction.quantity < 0
                    ? infoObject.expenses + transaction.quantity
                    : infoObject.expenses,
                income:
                  transaction.quantity > 0
                    ? infoObject.income + transaction.quantity
                    : infoObject.income,
              }
            : { ...infoObject }
        );
      } else {
        return [
          ...info,
          {
            index: periodNumber,
            name: periodName,
            sum: transaction.quantity,
            expenses: transaction.quantity < 0 ? transaction.quantity : 0,
            income: transaction.quantity > 0 ? transaction.quantity : 0,
          },
        ];
      }
    },
    []
  );

  periodInfo.sort((periodA, periodB) => periodA.index - periodB.index);

  const title =
    type === Periods.years
      ? "Años"
      : type === Periods.quarters
      ? "Trimestres"
      : "Meses";

  return (
    <>
      <h3>{title}</h3>
      {periodInfo.map(({ name, expenses, income, sum }) => (
        <Fragment key={name}>
          <h4>{name}</h4>
          <p>Gastos: {expenses.toFixed(2)}€</p>
          <p>Ingresos: {income.toFixed(2)}€</p>
          <p>Total: {sum.toFixed(2)}€</p>
        </Fragment>
      ))}
      <TotalsFooter
        expenses={totalExpenses}
        income={totalIncome}
        sum={totalSum}
      />
    </>
  );
};

export default StatsPeriod;
