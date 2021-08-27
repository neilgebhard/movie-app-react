import { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./PopularMovies.module.css";

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// e7daa04756450d99beb62cb1339a0566

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  // const endpoint = `./movies.json`;
  useEffect(() => {
    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <section>
      <div className="container">
        <h2>Popular</h2>
        <div className={styles["movie-list"]}>
          {movies.map((movie) => (
            <Movie key={["movies", movie.id].join("-")} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMovies;
