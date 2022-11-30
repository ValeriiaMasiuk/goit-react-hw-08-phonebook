import ContactsForm from "./ContactsForm/ContactsForm";
import ContactList from "./ContactList/ContactList";
import FilterForm from "./FilterForm/FilterForm";
import { MainHeader, SecondHeader } from './App.styled';

export default function App() {
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

        <ContactList/>
      </div>
    )
  }