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
    return <div>No results found.</div>;
  }

  return (
    <main className={styles.main}>
      <h1>Movie Search</h1>
      <ul className={styles.searchList}>
        {movies.map((movie) => (
          <SearchResultItem key={movie.id} {...movie} />
        ))}
      </ul>
    </main>
  );
};

export default SearchResults;
