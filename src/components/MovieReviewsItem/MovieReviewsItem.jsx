export default function MovieReviewsItem({ review: { author, content } }) {
  return (
    <div>
      <b>Author: {author}</b>
      <p> {content}</p>
    </div>
  );
}
