import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  a {
    color: inherit;
    text-decoration: none;
    margin-left: 10px;
    &.active {
      font-weight: bold;
    }
  }
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader as="header">
      <Col as="h1" xs={4}>
        Transacciones
      </Col>
      <Col xs={8} className="text-end">
        <NavLink to={routes.listTransactions} end>
          Transacciones
        </NavLink>
        <NavLink to={routes.stats}>Estadísticas</NavLink>
        <NavLink to={routes.newTransaction}>Nueva transacción</NavLink>
        <NavLink to={routes.uploadXLSX}>Cargar datos</NavLink>
      </Col>
    </StyledHeader>
  );
};

export default Header;
