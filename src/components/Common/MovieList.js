import Movie from "./MovieItem";
import SideScroll from "../UI/SideScroll";

const MovieList = ({ movies }) => {
  return (
    <SideScroll>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </SideScroll>
  );
};

export default MovieList;
