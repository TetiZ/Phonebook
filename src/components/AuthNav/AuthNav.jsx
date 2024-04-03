import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNavigation() {
  return (
    <nav>
      <NavLink className={css.link} to="/registration">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </nav>
  );
}
