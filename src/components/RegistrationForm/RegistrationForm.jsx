import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId, useState } from "react";
import * as Yup from "yup";

import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import css from "../LoginForm/LoginForm.module.css";
import { formStyle } from "../../muiStyles";

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
      <Form className={css.form}>
        <div>
          <Field
            name="name"
            id={userName}
            label="Name"
            required
            as={TextField}
            variant="outlined"
            sx={formStyle}
            fullWidth
          ></Field>
          {
            <ErrorMessage
              component="span"
              name="name"
              className={css.error}
            ></ErrorMessage>
          }
        </div>

        <div>
          <Field
            name="email"
            id={userEmail}
            label="E-mail"
            type="email"
            required
            as={TextField}
            variant="outlined"
            sx={formStyle}
            fullWidth
          ></Field>
          <ErrorMessage
            component="span"
            name="email"
            className={css.error}
          ></ErrorMessage>
        </div>

        <div>
          <Field
            name="password"
            id={userPassword}
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            as={TextField}
            variant="outlined"
            sx={formStyle}
            fullWidth
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
            className={css.error}
          ></ErrorMessage>
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
