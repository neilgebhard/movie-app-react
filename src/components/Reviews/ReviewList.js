import { useEffect, useState } from "react";
import styles from "./ReviewList.module.css";
import axios from "axios";
import Review from "./Review";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
          language: "en-US",
          api_key: API_KEY,
          page: 1,
        },
      })
      .then((res) => setReviews(res.data.results));
  }, [movieId]);

  return (
    <section className={styles.section}>
      {reviews.length > 0 && (
        <div className="container">
          <h2 className={styles.headerText}>Reviews</h2>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
