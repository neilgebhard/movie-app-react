import { useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";
import type { Review as ReviewType } from "../../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

type AppProps = {
  movieId: string;
};

function Reviews({ movieId }: AppProps) {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

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
    <section>
      {reviews.length > 0 && (
        <>
          <h2>Reviews</h2>
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </>
      )}
    </section>
  );
}

export default Reviews;