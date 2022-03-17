import { Col, Container, Row } from "react-bootstrap";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import TransactionsListPage from "./pages/TransactionsListPage/TransactionsListPage";
import styled from "styled-components";
import FormTransactionPage from "./pages/FormTransactionPage/FormTransactionPage";
import routes from "./routes";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;
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
          <Col as="h1" xs={9}>
            Transacciones
          </Col>
          <Col xs={3} className="text-end">
            <NavLink to={routes.listTransactions} end>
              Transacciones
            </NavLink>{" "}
            <NavLink to={routes.newTransaction}>Nueva transacción</NavLink>
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
