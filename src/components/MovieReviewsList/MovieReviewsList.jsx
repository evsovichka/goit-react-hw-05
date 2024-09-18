import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/tmdb-api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";

export default function MovieReviewsList() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <MovieReviewsItem review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
