import style from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <b className={style.textError}>
      An error occurred while loading the page. Please try reloading the page to
      resolve the issue.
    </b>
  );
}
