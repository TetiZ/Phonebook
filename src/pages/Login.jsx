import PageTitle from "../components/PageTitle/PageTitle";
import LoginForm from "../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />

      <p>
        New to our platform? <NavLink to="./registration">Sign up now!</NavLink>
      </p>
    </div>
  );
}
