import SearchInput from "../Search/SearchInput";
import styles from "./Header.module.css";
import CameraIcon from "../../assets/CameraIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <CameraIcon aria-label="Logo" />
        &nbsp;&nbsp;<span>Movies</span>
      </a>
      <SearchInput />
    </header>
  );
};

export default Header;
