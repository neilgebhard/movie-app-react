import { useEffect, useState } from "react";
import MovieList from "../common/MovieList";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <section>
      <h2>Trending</h2>
      <MovieList movies={movies} />
    </section>
  );
};

export default Trending;
