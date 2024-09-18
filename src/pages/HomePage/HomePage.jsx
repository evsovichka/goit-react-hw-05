import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchPopularMovie } from "../../components/services/tmdb-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        setError(false);
        setLoader(true);
        const movies = await fetchPopularMovie();
        setPopularMovies(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={popularMovies} />
    </div>
  );
}
