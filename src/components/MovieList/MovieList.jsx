import MovieListItem from "../MovieListItem/MovieListItem";
import style from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={style.list}>
      {movies.map((movie) => {
        return (
          <li className={style.item} key={movie.id}>
            <MovieListItem movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}
