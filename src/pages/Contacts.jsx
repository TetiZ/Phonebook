import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../redux/contacts/operations";

export default function Contacts() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Your Phonebook</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <p>Error was occured</p>}
      {loading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}
