import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";

import style from "../../components/App/App.module.css";
import css from "./Contacts.module.css";

export default function Contacts() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={style.section}>
      <div className={css.container}>
        <ContactForm />
        <SearchBox />
        {error && <p>Error was occured</p>}
        {loading && <p>Loading...</p>}
      </div>
      <PageTitle>Your Phonebook</PageTitle>
      <ContactList />
    </section>
  );
}
