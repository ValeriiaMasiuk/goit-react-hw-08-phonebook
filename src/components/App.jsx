import { useState, useEffect } from "react";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactList from "./ContactList/ContactList";
import FilterForm from "./FilterForm/FilterForm";
import shortid from "shortid";
import {MainHeader, SecondHeader} from './App.styled'

export default function App() {

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

    const addContact = ({ name, number }) => {
      const contactItem = {
        id: shortid.generate(),
        name,
        number,
      }

        contacts.some(contact => contact.name.toLowerCase().includes(contactItem.name))
          ? alert('You already have a contact with the same name')
          : setContacts(prevState => [...prevState, contactItem]);
      }
  
    const changeFilter = (evt) => {
      setFilter(evt.target.value)
    }

    const deleteContact = (contactId) => {
      setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
    }

    const getFilteredContacts = () => {
      if (filter) {
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
          onContactDelete={deleteContact} />
      </div>
    )
  }