import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const openDeleteModal = () => {
    setIsDeleting(true);
  };

  const closeDeleteModal = () => {
    setIsDeleting(false);
  };

  return (
    <div className={css.contact}>
      <div>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button type="button" onClick={openDeleteModal}>
          Delete
        </button>
        <button type="button" onClick={openEditModal}>
          Edit
        </button>
      </div>
      <ContactModal
        initialName={name}
        initialNumber={number}
        contactId={id}
        isOpen={isEditing}
        closeModal={closeEditModal}
      />
      <DeleteModal
        isOpen={isDeleting}
        closeModal={closeDeleteModal}
        contactId={id}
      />
    </div>
  );
}
