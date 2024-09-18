export default function MovieCastItem({
  actor: { character, name, profile_path },
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </div>
  );
}
