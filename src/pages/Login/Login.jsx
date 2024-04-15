import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.container}>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />

      <p>
        New to our platform? <NavLink to="/registration">Sign up now!</NavLink>
      </p>
    </div>
  );
}
