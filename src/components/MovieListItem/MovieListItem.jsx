import { Link } from "react-router-dom";

export default function MovieListItem({ movie: { title, id } }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
