import { useEffect, useState } from "react";
import MovieList from "../Common/MovieList";
import axios from "axios";
import styles from "./Similar.module.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Similar = ({ movieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
        params: {
          api_key: API_KEY,
          language: "en",
          page: 1,
        },
      })
      .then((res) => setMovies(res.data.results.slice(0, 5)));
  }, [movieId]);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.headerText}>Similar Movies</h2>
        <MovieList movies={movies} />
      </div>
    </section>
  );
};

export default Similar;
