import { Link, useLocation } from "react-router-dom";
import style from "./MovieListItem.module.css";

export default function MovieListItem({ movie: { title, id } }) {
  const location = useLocation();

  return (
    <Link className={style.link} to={`/movies/${id}`} state={location}>
      {title}
    </Link>
  );
}
