import { useEffect, useState } from "react";
import Movie from "./MovieItem";
import Grid from "../UI/Grid";
import axios from "axios";
import type { Movie as MovieType } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

type AppProps = {
  title: string;
  endpoint: string;
};

const MovieList = ({ title, endpoint }: AppProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    axios
      .get(endpoint, {
        params: {
          language: "en-US",
          api_key: API_KEY,
          page: 1,
        },
      })
      .then((res) => setMovies(res.data.results));
  }, [endpoint]);

  return (
    <Grid title={title}>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </Grid>
  );
};

export default MovieList;
