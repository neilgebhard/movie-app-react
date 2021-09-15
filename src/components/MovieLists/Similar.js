import { useEffect, useState } from "react";
import MovieList from "../common/MovieList";
import axios from "axios";

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
      .then((res) => setMovies(res.data.results));
  }, [movieId]);

  return (
    <section>
      <h2>Similar Movies</h2>
      <MovieList movies={movies} />
    </section>
  );
};

export default Similar;
