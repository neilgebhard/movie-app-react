import Popular from "./MovieLists/Popular";
import Trending from "./MovieLists/Trending";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>MOVIES</section>
      <Popular />
      <Trending />
    </>
  );
};

export default Home;
