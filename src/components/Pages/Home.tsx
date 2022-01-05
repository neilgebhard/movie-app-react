import styles from "./Home.module.css";
import MovieList from "../Common/MovieList";

const movieLists = [
  {
    title: "Popular",
    endpoint: "https://api.themoviedb.org/3/movie/popular",
  },
  {
    title: "Trending",
    endpoint: "https://api.themoviedb.org/3/trending/movie/week",
  },
  {
    title: "Now Playing",
    endpoint: "https://api.themoviedb.org/3/movie/now_playing",
  },
  {
    title: "Upcoming",
    endpoint: "https://api.themoviedb.org/3/movie/upcoming",
  },
  {
    title: "Top Rated",
    endpoint: "https://api.themoviedb.org/3/movie/popular",
  },
];

const Home = () => {
  return (
    <main className={`container ${styles.main}`}>
      {movieLists.map((list, i) => (
        <div className="margin-bottom-lg" key={i}>
          <MovieList title={list.title} endpoint={list.endpoint} />
        </div>
      ))}
    </main>
  );
};

export default Home;
