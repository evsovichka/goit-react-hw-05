import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCastList from "../MovieCastList/MovieCastList";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

import style from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <header>
      <nav className={style.nav}>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>Movies Page</div>} />
        <Route path="*" element={<div>Error Page</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCastList />} />
          <Route path="reviews" element={<MovieReviewsList />} />
        </Route>
      </Routes>
    </header>
  );
}
