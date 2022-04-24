import styles from "./Footer.module.css";
import GithubIcon from "../../assets/GithubIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p data-testid="made-by">
          © Neil Gebhard. The code is on{" "}
          <a href="https://github.com/neilgebhard/movie-app-react">
            Github <GithubIcon height={15} />
          </a>{" "}
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
