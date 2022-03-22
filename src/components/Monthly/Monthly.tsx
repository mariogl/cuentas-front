import { getMonth } from "date-fns";
import { Fragment } from "react";
import monthsNames from "../../dateUtils/dateUtils";
import Transaction from "../../types/transaction";
import TotalsFooter from "../TotalsFooter/TotalsFooter";

interface MonthlyProps {
  transactions: Transaction[];
  totalSum: number;
  totalIncome: number;
  totalExpenses: number;
}

interface MonthInfo {
  name: string;
  index: number;
  expenses: number;
  income: number;
  sum: number;
}

const Monthly = ({
  transactions,
  totalSum,
  totalIncome,
  totalExpenses,
}: MonthlyProps): JSX.Element => {
  const monthsInfo: MonthInfo[] = transactions.reduce(
    (info: MonthInfo[], transaction) => {
      const monthNumber = getMonth(transaction.date);
      const monthName = monthsNames[monthNumber];
      if (info.find((infoObject) => infoObject.name === monthName)) {
        return info.map((infoObject) =>
          infoObject.name === monthName
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
            index: monthNumber,
            name: monthName,
            sum: transaction.quantity,
            expenses: transaction.quantity < 0 ? transaction.quantity : 0,
            income: transaction.quantity > 0 ? transaction.quantity : 0,
          },
        ];
      }
    },
    []
  );

  monthsInfo.sort((monthA, monthB) => monthA.index - monthB.index);

  return (
    <>
      <h3>Months</h3>
      {monthsInfo.map(({ name, expenses, income, sum }) => (
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

export default Monthly;
