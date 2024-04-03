import { useDispatch } from "react-redux";
import css from "../ContactForm/ContactForm.module.css";
import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/operations";

export default function DeleteModal({ isOpen, closeModal, contactId }) {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Contact Modal"
    >
      <h2>
        Are you sure you want to delete this contact? This action cannot be
        undone
      </h2>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contactId));
        }}
      >
        Delete
      </button>
      <button className={css.btn} type="button" onClick={closeModal}>
        Cancel
      </button>
    </Modal>
  );
}
