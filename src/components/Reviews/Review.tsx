import ShowMoreText from "react-show-more-text";
import styles from "./Review.module.css";
import type { Review as ReviewType } from "../../types";

const Review = ({ content, created_at, author }: ReviewType) => {
  const date = new Date(created_at);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <div className={styles.review}>
      <strong>{author}</strong>
      <p className={styles.date}>
        {month}/{day}/{year}
      </p>
      <ShowMoreText
        lines={3}
        more="Read more"
        less="Show less"
        expanded={false}
        anchorClass={styles.link}
        truncatedEndingComponent={"... "}
      >
        <p style={{ whiteSpace: "pre-line" }}>{content}</p>
      </ShowMoreText>
    </div>
  );
};

export default Review;
