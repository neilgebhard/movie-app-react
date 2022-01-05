import styles from "./Card.module.css";

type AppProps = {
  children: React.ReactNode;
};

const Card = ({ children }: AppProps) => {
  return <li className={styles.card}>{children}</li>;
};

export default Card;
