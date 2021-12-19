import styles from "./Footer.module.css";
import GithubIcon from "../../assets/GithubIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          Made by <strong>Neil Gebhard</strong>.
        </p>
        <p>
          The code is on{" "}
          <a href="https://github.com/neilgebhard/movie-app-react">
            Github <GithubIcon height="20" />
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
