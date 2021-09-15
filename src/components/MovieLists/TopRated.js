import { useEffect, useState } from "react";
import MovieList from "../Common/MovieList";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          language: "en-US",
          api_key: API_KEY,
          page: 1,
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <section>
      <h2>Top Rated</h2>
      <MovieList movies={movies} />
    </section>
  );
}

export default TopRated;
