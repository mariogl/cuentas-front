import { Col, Container, Row } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import TransactionsListPage from "./pages/TransactionsListPage/TransactionsListPage";
import FormTransactionPage from "./pages/FormTransactionPage/FormTransactionPage";
import routes from "./routes";
import FormXLSXPage from "./pages/FormXLSXPage/FormXLSXPage";
import Header from "./components/Header/Header";
import StatsPage from "./pages/StatsPage/StatsPage";

const App = () => {
  return (
    <>
      <Container fluid>
        <Header />
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
              <Route path={routes.stats} element={<StatsPage />} />
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
