import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import { IoIosContact } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";

import css from "./ContactForm.module.css";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Required field"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
      message: "Invalid phone number format, use XXX-XX-XX",
      excludeEmptyString: true,
    })
    .required("Required field"),
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
    <>
      <p className={css.text}>Add new contact</p>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor={userName}>
              Name
            </label>

            <Field
              className={css.input}
              name="name"
              id={userName}
              placeholder="Name"
              required
            />
            <IoIosContact className={css.icon} />
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor={userPhoneNumber}>
              Phone
            </label>

            <Field
              className={css.input}
              name="number"
              id={userPhoneNumber}
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="XXX-XX-XX"
              required
            />
            <GiRotaryPhone className={css.icon} />
            <ErrorMessage
              className={css.error}
              component="span"
              name="number"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
