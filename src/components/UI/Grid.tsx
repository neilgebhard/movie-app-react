import styles from "./Grid.module.css";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Grid = ({ title, children }: Props) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <section className={styles.wrapper}>
        <ul className={styles.content}>{children}</ul>
      </section>
    </>
  );
};

export default Grid;
