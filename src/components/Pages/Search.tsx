import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultItem from "../Search/SearchResultItem";
import styles from "./Search.module.css";
import type { Movie } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchResults = () => {
  const { searchText } = useParams<{ searchText: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);

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
          <SearchResultItem key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResults;
