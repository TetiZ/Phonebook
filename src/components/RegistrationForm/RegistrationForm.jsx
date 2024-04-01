import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";

const userCredentialsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required field"),
  email: Yup.string().email("Invalid email format").required("Required field"),

  password: Yup.string()
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .matches(/[0-9]/, "password must contain at least 1 number")
    .matches(/[a-z]/, "password must contain at least 1 lower case letter")
    .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
    .required("Please Enter your password"),
});

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
      validationSchema={userCredentialsValidationSchema}
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
