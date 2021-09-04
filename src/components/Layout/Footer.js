import styles from "./Footer.module.css";
import GithubIcon from "../../assets/GithubIcon";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`container ${styles.flex}`}>
        <h3 className={styles.title}>Neil's Movie App</h3>
        <a href="https://github.com/neilgebhard/movie-app-react">
          <GithubIcon />
        </a>
      </div>
    </section>
  );
};

export default Footer;
