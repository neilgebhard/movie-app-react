import styles from "./Details.module.css";

const Details = ({ movie }) => {
  const {
    budget,
    homepage,
    original_language,
    popularity,
    revenue,
    release_date,
    status,
  } = movie;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <h3>Details</h3>
      <dl className={styles.dl}>
        <dt>Released</dt>
        <dd>{release_date}</dd>
        <dt>Revenue</dt>
        <dd>{formatter.format(revenue)}</dd>
        <dt>Budget</dt>
        <dd>{formatter.format(budget)}</dd>
        <dt>Homepage</dt>
        <dd>
          <a href={homepage}>{homepage}</a>
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
