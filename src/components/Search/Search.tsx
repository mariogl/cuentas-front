import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loadTransactionsThunk } from "../../redux/thunks/transactionsThunks";

const Search = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const [hasSearch, setHasSearch] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();

  const changeData = (event: SyntheticEvent) => {
    clearTimeout(timer.current);
    setIsTyping(true);
    timer.current = window.setTimeout(() => {
      setIsTyping(false);
    }, 500);
    setSearchText((event.target as HTMLInputElement).value);
  };

  const timer = useRef<number>();

  useEffect(() => {
    if (isTyping) {
      return;
    }
    if (searchText.length >= 3) {
      dispatch(loadTransactionsThunk(searchText));
      setHasSearch(true);
    } else if (searchText.length === 0 && hasSearch) {
      dispatch(loadTransactionsThunk());
      setHasSearch(false);
    }
  }, [dispatch, hasSearch, isTyping, searchText]);

  return (
    <Row>
      <Form className="col-4">
        <InputGroup>
          <Form.Control type="text" value={searchText} onChange={changeData} />
          <InputGroup.Text id="search">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </Row>
  );
};

export default Search;
