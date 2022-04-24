import styles from "./Home.module.css";
import MovieList from "../Movie/MovieList";

const movieLists = [
  ["Popular", "https://api.themoviedb.org/3/movie/popular"],
  ["Trending", "https://api.themoviedb.org/3/trending/movie/week"],
  ["Now Playing", "https://api.themoviedb.org/3/movie/now_playing"],
  ["Upcoming", "https://api.themoviedb.org/3/movie/upcoming"],
  ["Top Rated", "https://api.themoviedb.org/3/movie/popular"],
];

const Home = () => {
  return (
    <main className={`container ${styles.main}`}>
      {movieLists.map(([title, endpoint], i) => (
        <div className="margin-bottom-sm" key={i}>
          <MovieList title={title} endpoint={endpoint} />
        </div>
      ))}
    </main>
  );
};

export default Home;
