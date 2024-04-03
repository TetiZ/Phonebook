import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./DeleteModal.module.css";

export default function DeleteModal({ isOpen, closeModal, contactId }) {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Contact Modal"
      className={css.content}
      overlayClassName={css.overlay}
    >
      <h2>
        Are you sure you want to delete this contact? This action cannot be
        undone
      </h2>
      <div className={css.btnWrapper}>
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
      </div>
    </Modal>
  );
}
