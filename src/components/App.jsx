import ContactsForm from "./ContactsForm/ContactsForm";
import ContactList from "./ContactList/ContactList";
import FilterForm from "./FilterForm/FilterForm";
import { MainHeader, SecondHeader } from './App.styled';
import { useDispatch, useSelector } from "react-redux";
import { addsContact, removeContact } from "redux/contacts/contactSlice";
import { filterContacts } from "redux/filter/filterSlice";

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)

  const addContact = data => {
    contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts.`)
      : dispatch(addsContact(data))         
    }
  
  
  const changeFilter = (evt) => {
      dispatch(filterContacts(evt.target.value))
    }

    const deleteContact = (evt) => {
      dispatch(removeContact(evt.target.id))
    }

    const getFilteredContacts = () => {
    if (filter && contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
    }

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

        <ContactsForm
          onSubmit={addContact}
        />

        <SecondHeader>Contacts</SecondHeader>
          
        <FilterForm
          filter={filter}
          onChange={changeFilter}
        />

        <ContactList
          contacts={getFilteredContacts()}
          onContactDelete={deleteContact}
        />
      </div>
    )
  }