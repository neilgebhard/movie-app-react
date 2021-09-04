import styles from "./Review.module.css";

const Review = ({ review }) => {
  const { content, created_at, author } = review;
  const date = new Date(created_at);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <div className={styles.review}>
      <p className={styles.reviewText}>{content}</p>
      <div className={styles.author}>
        <strong>{author}</strong>
        <div className={styles.date}>
          {month}/{day}/{year}
        </div>
      </div>
    </div>
  );
};

export default Review;
