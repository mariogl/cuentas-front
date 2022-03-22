import styled from "styled-components";

const StyledTotalsFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: #fff;
  .tag {
    font-weight: bold;
  }
`;

interface TotalsFooterProps {
  income: number;
  expenses: number;
  sum: number;
}

const TotalsFooter = ({
  income,
  expenses,
  sum,
}: TotalsFooterProps): JSX.Element => {
  return (
    <StyledTotalsFooter>
      <div>
        <span className="tag">Gastos:</span> {expenses.toFixed(2)}€
      </div>
      <div>
        <span className="tag">Ingresos:</span> {income.toFixed(2)}€
      </div>
      <div>
        <span className="tag">Total:</span> {sum.toFixed(2)}€
      </div>
    </StyledTotalsFooter>
  );
};

export default TotalsFooter;
