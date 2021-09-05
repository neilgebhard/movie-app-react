import SearchInput from "../Search/SearchInput";
import styles from "./Header.module.css";
import CameraIcon from "../../assets/CameraIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <CameraIcon />
        &nbsp; Neil's Movie App
      </a>
      <SearchInput />
      <nav>
        <ul>{/* <li>Link</li> */}</ul>
      </nav>
    </header>
  );
};

export default Header;