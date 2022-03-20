import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  StyledArticle,
  StyledCategory,
  StyledDate,
  StyledDescription,
  StyledTags,
} from "./TransactionCardStyled";
import Transaction from "../../types/transaction";
import routes from "../../routes";
import { Col } from "react-bootstrap";

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({
  transaction: { id, category, tags, description, quantity, balance, date },
}: TransactionCardProps): JSX.Element => {
  const formatedTags = tags?.map((tag, i: number) => (
    <Link to={routes.filterTagWithId(tag.id)}>
      {tag.name}
      {i < tags.length ? ", " : ""}
    </Link>
  ));
  return (
    <StyledArticle>
      <Col xs={2}>
        <StyledCategory>{category?.name ?? "Sin categoría"}</StyledCategory>
      </Col>
      <Col xs={6}>
        <StyledDescription>
          <span>{description}</span>
          <Link to={routes.editTransactionWithId(id)}>
            <FaPen />
          </Link>
        </StyledDescription>
        <StyledDate>{new Date(date).toLocaleDateString()}</StyledDate>
        <StyledTags>{formatedTags}</StyledTags>
      </Col>
      <Col xs={2}>{quantity}€</Col>
      <Col xs={2}>{balance}€</Col>
    </StyledArticle>
  );
};

export default TransactionCard;
