import { useCallback, useEffect, useState } from "react";
import Movie from "./MovieItem";
// import Grid from "../UI/Grid";
import axios from "axios";
import type { Movie as MovieType } from "../../types";
import Carousel from "react-multi-carousel";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type Props = {
  title: string;
  endpoint: string;
};

const MovieList = ({ title, endpoint }: Props) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const fetchMovies = useCallback(() => {
    axios
      .get(endpoint, {
        params: {
          language: "en-US",
          api_key: API_KEY,
        },
      })
      .then((res) => setMovies((movies) => [...movies, ...res.data.results]));
  }, [endpoint]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <section className="container">
      <h2>{title}</h2>
      <Carousel
        itemClass="margin-right-sm"
        responsive={responsive}
        autoPlaySpeed={999999}
      >
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </Carousel>
    </section>
  );
};

export default MovieList;
