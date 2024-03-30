import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";

export default function RegistrationForm() {
  const userName = useId();
  const userEmail = useId();
  const userPassword = useId();

  const dispatch = useDispatch();
  const registrationHandler = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={registrationHandler}
    >
      <Form>
        <div>
          <label htmlFor={userName}>Name</label>
          <Field name="name" id={userName}></Field>
          <ErrorMessage component="span" name="name"></ErrorMessage>
        </div>

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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
