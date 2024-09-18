import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import style from "./MovieDetails.module.css";

export default function MovieDetails({
  details: { title, poster_path, overview, genres, vote_average },
}) {
  return (
    <div>
      <div className={style.wraper}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div className={style.info}>
          <p className={style.title}>{title}</p>
          <div>
            <b>Overview:</b>
            <p> {overview}</p>
          </div>
          <div>
            <b> Genres:</b>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>Rating:</b>
            <p> {vote_average}</p>
          </div>
        </div>
      </div>
      <div className={style.block}>
        <b>Additional information: </b>

        <ul className={style.list}>
          <li>
            <NavLink
              className={(props) => {
                return clsx(style.link, props.isActive && style.activeLink);
              }}
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(props) => {
                return clsx(style.link, props.isActive && style.activeLink);
              }}
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}
