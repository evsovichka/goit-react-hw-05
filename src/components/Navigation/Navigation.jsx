import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav className={style.nav}>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
