import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNavigation() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <NavLink className={linkClass} to="/registration">
        Register
      </NavLink>
      <NavLink className={linkClass} to="/login">
        Log in
      </NavLink>
    </nav>
  );
}
