import styles from "./Details.module.css";
import type { MovieDetails } from "../../types";

const Details = ({
  budget,
  homepage,
  original_language,
  popularity,
  revenue,
  release_date,
  status,
}: MovieDetails) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <h2>Details</h2>
      <dl className={styles.dl}>
        <dt>Released</dt>
        <dd>{release_date}</dd>
        <dt>Revenue</dt>
        <dd>{formatter.format(revenue)}</dd>
        <dt>Budget</dt>
        <dd>{formatter.format(budget)}</dd>
        <dt>Homepage</dt>
        <dd>
          <a href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </a>
        </dd>
        <dt>Original Language</dt>
        <dd>{original_language}</dd>
        <dt>Popularity</dt>
        <dd>{popularity}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
};

export default Details;
