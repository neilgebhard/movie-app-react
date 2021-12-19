import { Link } from "react-router-dom";
import { Img } from "react-image";
import styles from "./SearchResultItem.module.css";
import StarIcon from "../../assets/StarIcon";

const SearchResultItem = ({ movie }) => {
  const { id, overview, poster_path, release_date, title, vote_average } =
    movie;
  const path = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const date = new Date(release_date);
  const releaseDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`} className={styles.link}>
        <Img src={[path, "https://via.placeholder.com/500x750?text=Poster"]} />
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{releaseDate}</p>
          <p className={styles.overview}>{overview}</p>
          <p className={styles.rating}>
            <StarIcon width={24} /> {vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default SearchResultItem;
