import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { fetchMovieDetails } from "../../components/services/tmdb-api";
// import MovieDetails from "../../components/MovieDetails/MovieDetails";
// import InfoBlock from "../../components/MovieCastList/MovieCastList";
// import MovieCast from "../../components/MovieCastList/MovieCastList";

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
      <Link to={backLinkRef.current}>Go back</Link>
      {details && <MovieDetails details={details} />}
    </div>
  );
}
