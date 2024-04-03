import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

Modal.setAppElement("#root");

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

export default function ContactModal({
  isOpen,
  closeModal,
  initialName,
  initialNumber,
  contactId,
}) {
  const dispatch = useDispatch();

  const submitHandler = (values, actions) => {
    dispatch(
      updateContact({
        id: contactId,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Contact Modal"
    >
      <h2>Edit Contact</h2>
      <Formik
        initialValues={{
          name: initialName,
          number: initialNumber,
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="name">Name</label>
            <Field className={css.input} name="name" />
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <Field
              className={css.input}
              name="number"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="XXX-XX-XX"
            />
            <ErrorMessage
              className={css.error}
              component="span"
              name="number"
            />
          </div>

          <button className={css.btn} type="submit">
            Save
          </button>
          <button className={css.btn} type="button" onClick={closeModal}>
            Cancel
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
