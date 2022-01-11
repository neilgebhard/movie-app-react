import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieHeader from "../MoviePage/MovieHeader";
import Cast from "../Cast/Cast";
import MovieList from "../Common/MovieList";
import ReviewList from "../Reviews/ReviewList";
import Details from "../MoviePage/Details";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./Movie.module.css";
import axios from "axios";
import type { MovieDetails } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MoviePage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
        },
      })
      .then((res) => setMovie(res.data));
  }, [movieId]);

  if (Object.keys(movie).length === 0) return <LoadingSpinner />;

  return (
    <>
      <main>
        <MovieHeader {...movie} />
        <Cast movieId={movieId} />
        <MovieList
          endpoint={`https://api.themoviedb.org/3/movie/${movieId}/similar`}
          title="Similar Movies"
        />
        <div className={styles.wrapper}>
          <ReviewList movieId={movieId} />
          <Details {...movie} />
        </div>
      </main>
    </>
  );
};

export default MoviePage;
