import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, ContactDetails, ContactItem, DeleteButton } from './ContactList.styled';
import { deleteContact } from 'redux/operations/operations';
import { AiOutlineCheck } from "react-icons/ai"
// import {MdDeleteForever} from "react-icons/md";

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filter);

    const removeContact = (evt) => {
      dispatch(deleteContact(evt.target.id))
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
            <ContactDetails><AiOutlineCheck/> {name}: {number}</ContactDetails>
            
            <DeleteButton id={id} onClick={removeContact}>
                Delete             
            </DeleteButton>
                </ContactItem>
        )                
            )}
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