import style from "./MovieCastItem.module.css";

export default function MovieCastItem({
  actor: { character, name, profile_path },
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <p className={style.text}>
        <b>Name:</b> {name}
      </p>
      <p className={style.text}>
        <b>Character: </b>
        {character}
      </p>
    </div>
  );
}
