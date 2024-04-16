import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId, useState } from "react";
import * as Yup from "yup";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import css from "./LoginForm.module.css";
import { formStyle } from "../../muiStyles";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required field"),

  password: Yup.string().required("Please Enter your password"),
});

export default function LoginForm() {
  const userEmail = useId();
  const userPassword = useId();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      validationSchema={loginValidationSchema}
      onSubmit={loginHandler}
    >
      <Form className={css.form}>
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

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
