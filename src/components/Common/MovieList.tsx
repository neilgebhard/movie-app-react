import { useCallback, useEffect, useRef, useState } from "react";
import Movie from "./MovieItem";
import Grid from "../UI/Grid";
import axios from "axios";
import type { Movie as MovieType } from "../../types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../UI/LoadingSpinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

type AppProps = {
  title: string;
  endpoint: string;
};

const MovieList = ({ title, endpoint }: AppProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const page = useRef(0);

  const fetchMovies = useCallback(() => {
    page.current++;

    axios
      .get(endpoint, {
        params: {
          language: "en-US",
          api_key: API_KEY,
          page: page.current,
        },
      })
      .then((res) => setMovies((movies) => [...movies, ...res.data.results]));
  }, [endpoint]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <section className="container">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMovies}
        hasMore={true}
        loader={<LoadingSpinner />}
        scrollThreshold={0.95}
      >
        <Grid title={title}>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </Grid>
      </InfiniteScroll>
    </section>
  );
};

export default MovieList;
