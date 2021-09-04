import SearchInput from "../Search/SearchInput";
import styles from "./Header.module.css";
import CameraIcon from "../../assets/CameraIcon";
import GithubIcon from "../../assets/GithubIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <CameraIcon />
        &nbsp; Neil's Movie App
      </a>
      <SearchInput />
      <nav>
        <ul>
          <li>
            <a href="https://github.com/neilgebhard/movie-app-react">
              <GithubIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
