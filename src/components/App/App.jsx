import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AppBar from "../AppBar/AppBar";
import { refreshUser } from "../../redux/auth/operations";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Error was occured</p>}
      {loading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}
