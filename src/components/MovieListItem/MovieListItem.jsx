import { Link, useLocation } from "react-router-dom";

export default function MovieListItem({ movie: { title, id } }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={location}>
      {title}
    </Link>
  );
}
