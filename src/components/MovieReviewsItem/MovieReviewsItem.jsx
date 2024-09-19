import style from "./MovieReviewsItem.module.css";

export default function MovieReviewsItem({ review: { author, content } }) {
  return (
    <div className={style.wrap}>
      <b>Author: {author}</b>
      <p> {content}</p>
    </div>
  );
}
