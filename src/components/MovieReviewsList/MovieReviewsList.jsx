import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/tmdb-api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
import style from "./MovieReviewsList.module.css";

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
      {reviews.length === 0 && (
        <div>Sorry, we couldn't find any reviews for this movie.</div>
      )}
      <ul className={style.list}>
        {reviews.map((review) => {
          return (
            <li className={style.item} key={review.id}>
              <MovieReviewsItem review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
