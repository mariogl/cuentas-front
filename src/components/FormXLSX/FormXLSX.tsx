import { FormEvent, SyntheticEvent, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const FormXLSX = (): JSX.Element => {
  const [XLSXData, setXLSXData] = useState<File | null>(null);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
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
            <Form.Control type="file" onChange={changeData} />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default FormXLSX;
