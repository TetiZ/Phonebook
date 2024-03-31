import { NavLink } from "react-router-dom";

export default function AuthNavigation() {
  return (
    <nav>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </nav>
  );
}
