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
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for a movie"
          ref={inputEl}
        />
        <button className={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
