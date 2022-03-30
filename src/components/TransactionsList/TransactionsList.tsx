import { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadCategoriesThunk } from "../../redux/thunks/categoriesThunks";
import {
  loadTransactionsThunk,
  setTransactionsCategoryBulkThunk,
} from "../../redux/thunks/transactionsThunks";
import RootState from "../../types/store";
import Transaction from "../../types/transaction";
import TransactionCard from "../TransactionCard/TransactionCard";

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList = ({
  transactions,
}: TransactionsListProps): JSX.Element => {
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { categories } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const selectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    (async () => {
      dispatch(loadCategoriesThunk());
    })();
  }, [dispatch]);

  const onToggleTransaction = (id: string) => {
    if (selectedTransactions.includes(id)) {
      setSelectedTransactions(
        selectedTransactions.filter((transaction) => transaction !== id)
      );
    } else {
      setSelectedTransactions([...selectedTransactions, id]);
    }
  };

  const applyCategory = async () => {
    await dispatch(
      setTransactionsCategoryBulkThunk(selectedTransactions, selectedCategory)
    );
    setSelectedTransactions([]);
    setSelectedCategory("");
    dispatch(loadTransactionsThunk());
  };

  return (
    <>
      {selectedTransactions.length > 0 && (
        <Row>
          <Col xs={2}>Cambiar a</Col>
          <Col xs={4}>
            <Form.Select size="sm" onChange={selectCategory}>
              <option value="">Sin categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={2}>
            <Button variant="secondary" size="sm" onClick={applyCategory}>
              Aplicar
            </Button>
          </Col>
        </Row>
      )}
      <Row as="ul" className="list-unstyled">
        {transactions.map((transaction: Transaction, i: number) => (
          <Col as="li" xs={12} key={transaction.id} className="container-card">
            <TransactionCard
              transaction={transaction}
              selectedTransactions={selectedTransactions}
              onToggleTransaction={onToggleTransaction}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TransactionsList;
