import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactSlice';
import { ContactsList, ContactItem, DeleteButton, ContactName, ContactNumber } from './ContactList.styled'

const ContactList = () => {
    const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)

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
        <ContactsList>
            {getFilteredContacts().map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactName>{name}</ContactName>
                    <ContactNumber>{number}</ContactNumber>
                    <DeleteButton id={id} onClick={deleteContact}>Delete contact</DeleteButton>
                </ContactItem>
            ))}
        </ContactsList>
    )
}

ContactList.propTypes = {
    id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    ]),
    name: PropTypes.string,
    number: PropTypes.number,
}

export default ContactList