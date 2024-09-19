import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieActors } from "../../services/tmdb-api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import style from "./MovieCastList.module.css";

export default function MovieCastList() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getActors = async () => {
      try {
        const cast = await fetchMovieActors(movieId);
        setActors(cast);
      } catch (error) {}
    };
    getActors();
  }, [movieId]);
  return (
    <ul className={style.list}>
      {actors.map((actor) => {
        return (
          <li className={style.item} key={actor.id}>
            <MovieCastItem actor={actor} />
          </li>
        );
      })}
    </ul>
  );
}
