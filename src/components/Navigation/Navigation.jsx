import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>Movies Page</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </header>
  );
}
