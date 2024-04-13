import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <li className={css.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.info}>
          Your phonebook is empty. Please use the form to add new contacts.
        </p>
      )}
    </>
  );
}
