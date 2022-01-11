import { useEffect, useState } from "react";
import Movie from "../Common/MovieItem";
import Grid from "../UI/Grid";
import axios from "axios";
import type { Movie as MovieType } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

type AppProps = {
  movieId: string;
};

const SimilarMovies = ({ movieId }: AppProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
          params: {
            language: "en-US",
            api_key: API_KEY,
            page: 1,
          },
        })
        .then((res) => setMovies(res.data.results.slice(0, 18)));
    };

    fetchMovies();
  }, [movieId, movies]);

  return (
    <section className="container">
      <h2>Similar Movies</h2>
      <Grid>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </Grid>
    </section>
  );
};

export default SimilarMovies;
