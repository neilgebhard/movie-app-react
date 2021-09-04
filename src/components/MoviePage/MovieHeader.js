import styles from "./MovieHeader.module.css";
import StarIcon from "../../assets/StarIcon";
import imdbImg from "../../assets/imdb.png";
import { getReleaseYear, getReleaseDate, getRuntimes } from "../util";

const MovieHeader = ({ movie }) => {
  const {
    backdrop_path,
    genres,
    imdb_id,
    title,
    overview,
    poster_path,
    release_date,
    runtime,
    tagline,
    vote_average,
  } = movie;

  const posterSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const bgImageSrc = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  const imdbUrl = `https://www.imdb.com/title/${imdb_id}`;
  const genreNames = genres ? genres.map((genre) => genre.name) : [];
  const releaseYear = getReleaseYear(release_date);
  const releaseDate = getReleaseDate(release_date);
  const [runtimeHours, runtimeMinutes] = getRuntimes(runtime);

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.93), rgba(34, 34, 34, 0.93)), url(${bgImageSrc})`,
      }}
    >
      <div className={`container ${styles.flex} ${styles.flexCenter}`}>
        <div className={styles.posterImgBox}>
          <img className={styles.posterImg} src={posterSrc} alt="Poster" />
        </div>
        <div className={styles.details}>
          <h1 className={styles.title}>
            {title}
            <span className={styles.releaseYear}>({releaseYear})</span>
          </h1>
          <p className={styles.facts}>
            <span>{releaseDate}</span>
            <span>{genreNames.join(", ")}</span>
            <span>{`${runtimeHours}h ${runtimeMinutes}m`}</span>
          </p>
          <p className={styles.tagline}>{tagline}</p>
          <h3 className={styles.overviewLabel}>Overview</h3>
          <p className={styles.overview}>{overview}</p>
          <p className={styles.rating}>
            <StarIcon width={40} /> {vote_average}
          </p>
          <a href={imdbUrl}>
            <img className={styles.imdbImg} src={imdbImg} alt="imdb" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
