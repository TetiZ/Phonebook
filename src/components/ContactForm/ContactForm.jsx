import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import style from "../../pages/Home.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { TextField } from "@mui/material";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required field"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
      message: "Invalid phone number format, use XXX-XX-XX",
      excludeEmptyString: true,
    })
    .required("Required"),
});

export default function ContactForm() {
  const userName = useId();
  const userPhoneNumber = useId();

  const dispatch = useDispatch();
  const submitHandler = (values, action) => {
    dispatch(
      addContact({
        id: values.id,
        name: values.name,
        number: values.number,
      })
    );
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className={css.form}>
        <div>
          <Field
            className={css.input}
            name="name"
            id={userName}
            as={TextField}
            variant="outlined"
            required
            label="Name"
          ></Field>
          <ErrorMessage
            className={css.error}
            component="span"
            name="name"
          ></ErrorMessage>
        </div>

        <div>
          <Field
            className={css.input}
            name="number"
            id={userPhoneNumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="XXX-XX-XX"
            as={TextField}
            variant="outlined"
            required
            label="Number"
          ></Field>
          <ErrorMessage
            className={css.error}
            component="span"
            name="number"
          ></ErrorMessage>
        </div>

        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
