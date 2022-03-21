import axios from "axios";
import { FormEvent, SyntheticEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";

const FormXLSX = (): JSX.Element => {
  const [XLSXData, setXLSXData] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("xlsx", XLSXData as Blob);

    setLoading(true);
    setError(false);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}xlsx`, formData, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (error: any) {
      setError(true);
    }

    setLoading(false);
  };

  const changeData = (event: SyntheticEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      setXLSXData(files[0]);
    }
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={submitForm}>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              onChange={changeData}
              disabled={loading}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {loading ? (
            <Loading />
          ) : (
            <Button type="submit" variant="dark" disabled={!XLSXData}>
              Cargar
            </Button>
          )}
        </Col>
      </Row>
      {error && (
        <Row>
          <Col xs={12}>Error al importar los datos</Col>
        </Row>
      )}
    </Form>
  );
};

export default FormXLSX;
