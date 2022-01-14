import styles from "./Card.module.css";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <li className={styles.card}>{children}</li>;
};

export default Card;
