import { useEffect, useState } from "react";
import axios from "axios";
import Actor from "./Actor";
import styles from "./Cast.module.css";
import type { Actor as ActorType } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

type AppProps = {
  movieId: string;
};

const Cast = ({ movieId }: AppProps) => {
  const [cast, setCast] = useState<ActorType[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
        },
      })
      .then((res) => setCast(res.data.cast.slice(0, 20)));
  }, [movieId]);

  return (
    <section className={`container ${styles.castSection}`}>
      <h2>Cast</h2>
      <ul className={styles.grid}>
        {cast.map((actor) => (
          <Actor key={actor.id} {...actor} />
        ))}
      </ul>
    </section>
  );
};
export default Cast;
