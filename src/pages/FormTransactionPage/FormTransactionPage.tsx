import { useParams } from "react-router-dom";
import FormTransaction from "../../components/FormTransaction/FormTransaction";

const FormTransactionPage = (): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      <h2>{id ? "Editar" : "Nueva"} transacción</h2>
      <FormTransaction id={id} />
    </>
  );
};

export default FormTransactionPage;
