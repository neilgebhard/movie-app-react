import styles from "./Actor.module.css";

const Actor = ({ actor }) => {
  const { character, name, profile_path } = actor;
  const profilePic = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
    <div className={styles.actor}>
      <img src={profilePic} alt="Profile" />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.character}>{character}</p>
      </div>
    </div>
  );
};

export default Actor;
