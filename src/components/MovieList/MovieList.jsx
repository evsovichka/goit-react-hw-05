import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieListItem movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
