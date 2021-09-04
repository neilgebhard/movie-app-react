import { useEffect, useState } from "react";
import axios from "axios";
import Actor from "./Actor";
import styles from "./Cast.module.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
        },
      })
      .then((res) => setCast(res.data.cast.slice(0, 6)));
  }, [movieId]);

  return (
    <>
      <h1 className={styles.headerText}>Cast</h1>
      <div className={styles.cast}>
        {cast.map((actor) => (
          <Actor key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
};
export default Cast;
