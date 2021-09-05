import Popular from "./MovieLists/Popular";
import Trending from "./MovieLists/Trending";
import NowPlaying from "./MovieLists/NowPlaying";
import Upcoming from "./MovieLists/Upcoming";
import TopRated from "./MovieLists/TopRated";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>MOVIES</section>
      <main className={styles.main}>
        <Popular />
        <Trending />
        <NowPlaying />
        <Upcoming />
        <TopRated />
      </main>
    </>
  );
};

export default Home;
