import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMovie } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";

export default function MoviesPage(params) {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("query") ?? "";
  const [moviesByTitle, setMoviesByTitle] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (title === "") {
      return;
    }
    const getMoviesByTitle = async () => {
      try {
        setError(false);
        setMoviesByTitle([]);
        setLoader(true);
        const moviesList = await searchMovie(title);
        if (moviesList.length === 0) {
          return toast.error(
            `Movie "${title}" not found. Title not recognized.`
          );
        }
        setMoviesByTitle(moviesList);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMoviesByTitle();
  }, [title]);

  return (
    <>
      {!loader && <SearchForm />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={moviesByTitle} />
    </>
  );
}
