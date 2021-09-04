import { Link } from "react-router-dom";
import styles from "./SearchResultItem.module.css";
import StarIcon from "../../assets/StarIcon";

const SearchResultItem = ({ movie }) => {
  const { id, overview, poster_path, release_date, title, vote_average } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const date = new Date(release_date);
  const releaseDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

  const overviewTrimmed =
    overview.length > 275 ? overview.substring(0, 275) + "..." : overview;

  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`} className={styles.flex}>
        <img src={poster} alt="Poster" />
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.overview}>{overviewTrimmed}</p>
          <p className={styles.rating}>
            <StarIcon width={24} /> {vote_average.toFixed(1)}
          </p>
          <p>{releaseDate}</p>
        </div>
      </Link>
    </li>
  );
};

export default SearchResultItem;

// {
//     adult: false
//     backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
//     genre_ids: (4) [28, 12, 14, 35]
//     id: 436969
//     original_language: "en"
//     original_title: "The Suicide Squad"
//     overview: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese."
//     popularity: 2878.154
//     poster_path: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg"
//     release_date: "2021-07-28"
//     title: "The Suicide Squad"
//     video: false
//     vote_average: 8
// }
