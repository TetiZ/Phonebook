import { ErrorMessage, Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId, useState } from "react";
import * as Yup from "yup";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import style from "../App/App.module.css";

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
      <Form>
        <div>
          <Field
            as={TextField}
            variant="outlined"
            name="email"
            id={userEmail}
            type="email"
            required
            label="E-mail"
          ></Field>
          <ErrorMessage component="span" name="email"></ErrorMessage>
        </div>

        <div>
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
          <ErrorMessage component="span" name="password"></ErrorMessage>
        </div>

        <button type="submit" className={style.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
