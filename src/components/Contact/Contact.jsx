import { IoIosContact } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

import css from "./Contact.module.css";
import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Contact({ contact: { id, name, number } }) {
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
          <IoIosContact className={css.contactIcon} />
          {name}
        </p>
        <p className={css.text}>
          <GiRotaryPhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.btn} type="button" onClick={openDeleteModal}>
          <AiOutlineDelete className={css.icon} />
        </button>
        <button className={css.btn} type="button" onClick={openEditModal}>
          <GrEdit className={css.icon} />
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
