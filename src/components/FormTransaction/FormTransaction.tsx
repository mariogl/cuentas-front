import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankTransaction } from "../../factories/transaction";
import {
  createTransactionThunk,
  updateTransactionThunk,
} from "../../redux/thunks/transactionsThunks";
import routes from "../../routes";
import Category from "../../types/category";
import Transaction from "../../types/transaction";

interface CategorySelect {
  id: string;
  name: string;
}

interface FormTransactionProps {
  id?: string;
  categories: Category[];
}

const FormTransaction = ({
  id,
  categories,
}: FormTransactionProps): JSX.Element => {
  const initialData: Transaction = blankTransaction();

  const [formData, setFormData] = useState<Transaction>(initialData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoriesSelect: CategorySelect[] = categories.map(({ id, name }) => ({
    id,
    name,
  }));

  const changeData = (event: ChangeEvent) => {
    event.preventDefault();
    const value =
      event.target.id === "date"
        ? new Date((event.target as HTMLInputElement).value)
        : (event.target as HTMLInputElement | HTMLSelectElement).value;
    setFormData({
      ...formData,
      [event.target.id]: value,
    });
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    if (validateData) {
      dispatch(
        id ? updateTransactionThunk(formData) : createTransactionThunk(formData)
      );
      navigate(routes.listTransactions);
    }
  };

  const validateData = !Object.values(formData).slice(1).includes("");

  return (
    <Form noValidate autoComplete="off" onSubmit={submitForm}>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={formData.description}
              onChange={changeData}
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={formData.quantity}
              onChange={changeData}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={formData.category.id} onChange={changeData}>
              <option value="">Elige categoría</option>
              {categoriesSelect.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={formData.date.toISOString().split("T")[0]}
              onChange={changeData}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button type="submit" variant="dark" disabled={!validateData}>
            {id ? "Modificar" : "Crear"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormTransaction;
