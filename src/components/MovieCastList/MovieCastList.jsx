import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieActors } from "../../services/tmdb-api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";

export default function MovieCastList() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getActors = async () => {
      try {
        const cast = await fetchMovieActors(movieId);
        console.log(cast);
        setActors(cast);
      } catch (error) {}
    };
    getActors();
  }, [movieId]);
  return (
    <ul>
      {actors.map((actor) => {
        return (
          <li key={actor.id}>
            <MovieCastItem actor={actor} />
          </li>
        );
      })}
    </ul>
  );
}
