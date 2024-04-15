import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "../Login/Login.module.css";
export default function Registration() {
  return (
    <div className={style.container}>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
