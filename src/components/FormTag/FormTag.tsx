import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTagToTransactionThunk } from "../../redux/thunks/transactionsThunks";
import Tag from "../../types/tag";

const StyledForm = styled(Form)`
  display: inline-block;
  margin-right: 5px;
`;

const StyledInput = styled(Form.Control)`
  width: 70px;
  height: 21px;
  display: inline-block;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8em;
`;

const StyledButton = styled(Button)`
  height: 21px;
  font-size: 0.8em;
  padding-top: 0;
  padding-bottom: 0;
`;

interface FormTagProps {
  transactionId: string;
  onEnd: () => void;
}

const FormTag = ({ onEnd, transactionId }: FormTagProps): JSX.Element => {
  const dispatch = useDispatch();

  const [tagName, setTagName] = useState("");

  const changeTag = (event: ChangeEvent) => {
    setTagName((event.target as HTMLInputElement).value);
  };

  const addTag = async (event: FormEvent) => {
    event.preventDefault();
    if (tagName !== "") {
      const {
        data: { tag: createdTag },
      } = await axios.post<{ tag: Tag }>(
        `${process.env.REACT_APP_API_URL}tags`,
        { name: tagName.toLocaleLowerCase() },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TEMPORARY_JWT}`,
          },
        }
      );

      dispatch(addTagToTransactionThunk(transactionId, createdTag));
    }

    onEnd();
  };

  const field = useRef<HTMLInputElement>();

  useEffect(() => {
    (field.current as HTMLInputElement).focus();
  }, []);

  return (
    <StyledForm onSubmit={addTag}>
      <StyledInput
        type="text"
        value={tagName}
        onChange={changeTag}
        ref={field}
      />
      <StyledButton type="submit" variant="dark" disabled={tagName === ""}>
        Añadir
      </StyledButton>
    </StyledForm>
  );
};

export default FormTag;
