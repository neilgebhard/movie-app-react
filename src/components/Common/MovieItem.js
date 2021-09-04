import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import StarIcon from "../../assets/StarIcon";

const Movie = ({ movie }) => {
  const { id, poster_path, title, vote_average } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={poster} alt="Poster" />
        <div className={styles.details}>
          <p className={styles.rating}>
            <StarIcon width={24} /> {vote_average.toFixed(1)}
          </p>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Movie;
