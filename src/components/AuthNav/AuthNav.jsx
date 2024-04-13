import { NavLink } from "react-router-dom";
import style from "../App/App.module.css";
import clsx from "clsx";

export default function AuthNavigation() {
  const linkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
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
