import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { Img } from "react-image";
import styles from "./MovieItem.module.css";
import StarIcon from "../../assets/StarIcon";

const Movie = ({ movie }) => {
  const { id, poster_path, title, vote_average } = movie;
  const path = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Card>
      <Link to={`/movie/${id}`}>
        <Img src={[path, "https://via.placeholder.com/500x750?text=Movie"]} />
        <div className={styles.details}>
          <p className={styles.rating}>
            <StarIcon width={24} /> {vote_average.toFixed(1)}
          </p>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </Card>
  );
};

export default Movie;
