import styles from "./Grid.module.css";

type AppProps = {
  children: React.ReactNode;
  title: string;
};

const Grid = ({ title, children }: AppProps) => {
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
