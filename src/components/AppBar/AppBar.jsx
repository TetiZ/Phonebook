import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  return (
    <>
      <RegistrationForm />
      <LoginForm />
      <UserMenu />
    </>
  );
}
