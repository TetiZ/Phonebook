import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId } from "react";

export default function LoginForm() {
  const userEmail = useId();
  const userPassword = useId();

  const dispatch = useDispatch();
  const loginHandler = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={loginHandler}
    >
      <Form>
        <div>
          <label htmlFor={userEmail}>Email</label>
          <Field name="email" id={userEmail} type="email"></Field>
          <ErrorMessage component="span" name="email"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={userPassword}>Password</label>
          <Field name="password" id={userPassword} type="password"></Field>
          <ErrorMessage component="span" name="password"></ErrorMessage>
        </div>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
