import { useSearchParams } from "react-router-dom";
import style from "./SearchForm.module.css";

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchParams.set("query", event.target.elements.title.value);
    setSearchParams(searchParams);
    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        placeholder="Enter the name of the movie"
        type="text"
        name="title"
        className={style.input}
      ></input>
      <button className={style.btn} type="submit">
        Search
      </button>
    </form>
  );
}
