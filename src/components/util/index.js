export const getReleaseDate = (releaseDate) => {
  const date = new Date(releaseDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const getReleaseYear = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.getFullYear();
};

export const getRuntimes = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = Math.floor(runtime % 60);
  return [hours, minutes];
};
