import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId, useState } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import style from "../App/App.module.css";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const userCredentialsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
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

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      <Form className={css.formWrapper}>
        <div className={css.thumb}>
          <Field
            as={TextField}
            variant="outlined"
            name="name"
            id={userName}
            required
            label="Name"
          ></Field>
          <ErrorMessage
            component="span"
            name="name"
            className={style.error}
          ></ErrorMessage>
        </div>

        <div className={css.thumb}>
          <Field
            as={TextField}
            variant="outlined"
            name="email"
            id={userEmail}
            type="email"
            required
            label="E-mail"
          ></Field>
          <ErrorMessage
            component="span"
            name="email"
            className={style.error}
          ></ErrorMessage>
        </div>

        <div className={css.thumb}>
          <Field
            as={TextField}
            variant="outlined"
            name="password"
            id={userPassword}
            required
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></Field>
          <ErrorMessage
            component="span"
            name="password"
            className={style.error}
          ></ErrorMessage>
        </div>

        <button type="submit" className={style.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
