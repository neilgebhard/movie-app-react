import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieHeader from "./MovieHeader";
import Cast from "../Cast/Cast";
import Similar from "../MovieLists/Similar";
import ReviewList from "../Reviews/ReviewList";
import Details from "./Details";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./MoviePage.module.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
        },
      })
      .then((res) => setMovie(res.data))
  }, [movieId]);

  if (Object.keys(movie).length === 0) return <LoadingSpinner />

  return (
    <>
      <MovieHeader movie={movie} />
      <section className="container">
        <Cast movieId={movieId} />
        <Similar movieId={movieId} />
        <div className={styles.wrapper}>
          <ReviewList movieId={movieId} />
          <Details movie={movie} />
        </div>
      </section>
    </>
  );
};

export default MoviePage;
