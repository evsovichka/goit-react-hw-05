import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/tmdb-api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import style from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setError(false);
        setLoader(true);
        const info = await fetchMovieDetails(movieId);
        setDetails(info);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link className={style.backlink} to={backLinkRef.current}>
        Go back
      </Link>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {details && <MovieDetails details={details} />}
    </div>
  );
}
