import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
