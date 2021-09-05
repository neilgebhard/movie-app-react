import styles from "./Footer.module.css";
import GithubIcon from "../../assets/GithubIcon";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div>Made with ❤️ by Neil Gebhard. The code is on <a href="https://github.com/neilgebhard/movie-app-react">Github <GithubIcon height="20" /></a>.</div>
      </div>
    </section>
  );
};

export default Footer;
