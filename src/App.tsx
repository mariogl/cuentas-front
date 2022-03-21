import { Col, Container, Row } from "react-bootstrap";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import TransactionsListPage from "./pages/TransactionsListPage/TransactionsListPage";
import styled from "styled-components";
import FormTransactionPage from "./pages/FormTransactionPage/FormTransactionPage";
import routes from "./routes";
import FormXLSXPage from "./pages/FormXLSXPage/FormXLSXPage";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;
    margin-left: 10px;
    &.active {
      font-weight: bold;
    }
  }
`;

const App = () => {
  return (
    <>
      <Container fluid>
        <StyledHeader as="header">
          <Col as="h1" xs={6}>
            Transacciones
          </Col>
          <Col xs={6} className="text-end">
            <NavLink to={routes.listTransactions} end>
              Transacciones
            </NavLink>{" "}
            <NavLink to={routes.newTransaction}>Nueva transacción</NavLink>
            <NavLink to={routes.uploadXLSX}>Cargar datos</NavLink>
          </Col>
        </StyledHeader>
        <Row as="main">
          <Col xs={12}>
            <Routes>
              <Route
                path={routes.listTransactions}
                element={<TransactionsListPage />}
              />
              <Route
                path={routes.newTransaction}
                element={<FormTransactionPage />}
              />
              <Route
                path={routes.editTransaction}
                element={<FormTransactionPage />}
              />
              <Route path={routes.uploadXLSX} element={<FormXLSXPage />} />
              <Route
                path="/"
                element={<Navigate to={routes.listTransactions} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
