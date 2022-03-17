import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
}

const FormTransaction = ({ id }: FormTransactionProps): JSX.Element => {
  const initialData: Transaction = blankTransaction();

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}transactions/${id}`,
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
            },
          }
        );
        setFormData({
          ...data.transaction,
        });
      })();
    }
  }, [id]);

  const [formData, setFormData] = useState<Transaction>(initialData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<CategorySelect[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<{ categories: Category[] }>(
        `${process.env.REACT_APP_API_URL}categories`,
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
          },
        }
      );
      setCategories(data.categories.map(({ id, name }) => ({ id, name })));
    })();
  }, []);

  const changeData = (event: ChangeEvent) => {
    event.preventDefault();
    const value = (event.target as HTMLInputElement).value;
    setFormData({
      ...formData,
      [event.target.id]: value,
    });
  };

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    if (validateData()) {
      await dispatch(
        id ? updateTransactionThunk(formData) : createTransactionThunk(formData)
      );
      navigate(routes.listTransactions);
    }
  };

  const validateData = (): boolean => {
    return !Object.values(formData).includes("");
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={submitForm}>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={formData.description}
              onChange={changeData}
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="student">
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
            <Form.Select value={formData.category} onChange={changeData}>
              <option value="">Elige categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button type="submit" variant="dark" disabled={!validateData()}>
            {id ? "Modificar" : "Crear"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormTransaction;
