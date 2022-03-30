import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormTransaction from "../../components/FormTransaction/FormTransaction";
import { loadCategoriesThunk } from "../../redux/thunks/categoriesThunks";
import RootState from "../../types/store";

const FormTransactionPage = (): JSX.Element => {
  const { id } = useParams();

  const { categories } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadCategoriesThunk());
    })();
  }, [dispatch]);

  return (
    <>
      <h2>{id ? "Editar" : "Nueva"} transacción</h2>
      <FormTransaction id={id} categories={categories} />
    </>
  );
};

export default FormTransactionPage;
