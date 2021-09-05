import styles from "./SideScroll.module.css";

const SideScroll = (props) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.content}>{props.children}</ul>
    </div>
  );
};

export default SideScroll;
