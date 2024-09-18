import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCastList from "../MovieCastList/MovieCastList";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
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
