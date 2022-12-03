import ContactsForm from "./ContactsForm/ContactsForm";
import ContactList from "./ContactList/ContactList";
import FilterForm from "./FilterForm/FilterForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations/operations";
import { MainHeader, SecondHeader } from './App.styled';

export default function App() {
  const dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>
        <MainHeader>Phonebook</MainHeader>

        <ContactsForm/>

        <SecondHeader>Contacts</SecondHeader>
          
        <FilterForm/>
      {isLoading && !error && <h3>Loading contacts...</h3>}
        <ContactList/>
      </div>
    )
  }