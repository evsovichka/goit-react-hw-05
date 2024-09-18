import { Link, Outlet } from "react-router-dom";

export default function MovieDetails({
  details: { title, poster_path, overview, genres, vote_average },
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <p>{title}</p>
      <p> Overview: {overview}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p> Rating: {vote_average}</p>
      <div>
        <p>Additional information </p>

        <ul>
          <li>
            <Link to="cast"> Cast </Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}
