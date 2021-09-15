import { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  const inputEl = useRef();
  let history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const searchText = inputEl.current.value;
    history.push(`/search/${searchText}`);
    inputEl.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.search}
        placeholder="Search for a movie"
        type="text"
        ref={inputEl}
      />
    </form>
  );
};

export default SearchInput;
