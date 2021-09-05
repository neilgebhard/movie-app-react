import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import styles from "./SearchResults.module.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchResults = () => {
  const { searchText } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
          query: searchText,
          page: 1,
          include_adult: false,
        },
      })
      .then((res) => setMovies(res.data.results));
  }, [searchText]);

  if (!movies) {
    return <h1>No results found.</h1>;
  }

  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {movies.map((movie) => (
          <SearchResultItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResults;
