import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  StyledArticle,
  StyledCategory,
  StyledTitle,
} from "./TransactionCardStyled";
import Transaction from "../../types/transaction";
import routes from "../../routes";

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({
  transaction: { id, category, description, quantity },
}: TransactionCardProps): JSX.Element => {
  return (
    <StyledArticle>
      <StyledCategory>{category}</StyledCategory>
      <StyledTitle>
        <span>{description}</span>{" "}
        <Link to={routes.editTransactionWithId(id)}>
          <FaPen />
        </Link>
      </StyledTitle>
    </StyledArticle>
  );
};

export default TransactionCard;
