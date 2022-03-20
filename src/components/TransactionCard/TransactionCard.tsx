import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  StyledArticle,
  StyledCategory,
  StyledClose,
  StyledDate,
  StyledDescription,
  StyledPlus,
  StyledTags,
} from "./TransactionCardStyled";
import Transaction from "../../types/transaction";
import routes from "../../routes";
import { Col } from "react-bootstrap";
import { SyntheticEvent, useState } from "react";
import FormTag from "../FormTag/FormTag";

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({
  transaction: { id, category, tags, description, quantity, balance, date },
}: TransactionCardProps): JSX.Element => {
  const [addingTag, setAddingTag] = useState(false);

  const openAddTag = (event: SyntheticEvent) => {
    event.preventDefault();
    setAddingTag(true);
  };

  const closeAddTag = () => {
    setAddingTag(false);
  };

  const formatedTags = tags?.map((tag, i: number) => (
    <span key={i}>
      {i === 0 ? "(" : ""}
      <Link to={routes.filterTagWithId(tag.id)}>{tag.name}</Link>
      {i < tags.length - 1 ? ", " : ")"}
    </span>
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
        <StyledTags>
          {" "}
          {formatedTags}{" "}
          {addingTag ? (
            <>
              <FormTag transactionId={id} onEnd={closeAddTag} />
              <a
                href="close-add-tag"
                title="Cerrar"
                onClick={(event: SyntheticEvent) => {
                  event?.preventDefault();
                  closeAddTag();
                }}
              >
                <StyledClose />
              </a>
            </>
          ) : (
            <a href="add-tag" title="Añadir tag" onClick={openAddTag}>
              <StyledPlus />
            </a>
          )}
        </StyledTags>
      </Col>
      <Col xs={2}>{quantity}€</Col>
      <Col xs={2}>{balance}€</Col>
    </StyledArticle>
  );
};

export default TransactionCard;
