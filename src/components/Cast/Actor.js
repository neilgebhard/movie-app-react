import Card from "../UI/Card";
import { Img } from "react-image";
import styles from "./Actor.module.css";

const Actor = ({ actor }) => {
  const { character, name, profile_path } = actor;
  const path = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <Card>
      <Img src={[path, "https://via.placeholder.com/500x750?text=Actor"]} />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.character}>{character}</p>
      </div>
    </Card>
  );
};

export default Actor;
