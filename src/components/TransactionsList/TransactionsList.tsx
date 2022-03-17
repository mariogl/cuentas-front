import { Col, Row } from "react-bootstrap";
import Transaction from "../../types/transaction";
import TransactionCard from "../TransactionCard/TransactionCard";

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList = ({
  transactions,
}: TransactionsListProps): JSX.Element => {
  return (
    <Row as="ul" className="list-unstyled">
      {transactions.map((transaction: Transaction, i: number) => (
        <Col as="li" xs={12} key={transaction.id} className="container-card">
          <TransactionCard transaction={transaction} />
        </Col>
      ))}
    </Row>
  );
};

export default TransactionsList;
