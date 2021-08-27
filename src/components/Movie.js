// {
//   "adult":false,
//   "backdrop_path":"/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
//   "genre_ids":[
//      28,
//      12,
//      14,
//      35
//   ],
//   "id":436969,
//   "original_language":"en",
//   "original_title":"The Suicide Squad",
//   "overview":"Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
//   "popularity":4295.182,
//   "poster_path":"/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
//   "release_date":"2021-07-28",
//   "title":"The Suicide Squad",
//   "video":false,
//   "vote_average":8,
//   "vote_count":2919
// },

// image - 150 x 225
// https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg

import styles from "./Movie.module.css";

const Movie = (props) => {
  const { title, poster_path } = props.movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className={styles["movie-card"]}>
      <img src={poster} alt="Poster" />
      <p className={styles.text}><a href="#">{title}</a></p>
    </div>
  );
};

export default Movie;
