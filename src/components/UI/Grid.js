import styles from "./Grid.module.css";

const Grid = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <section className={styles.wrapper}>
        <ul className={styles.content}>{children}</ul>
      </section>
    </>
  );
};

export default Grid;
