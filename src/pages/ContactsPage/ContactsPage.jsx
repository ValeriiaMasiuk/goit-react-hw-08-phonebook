import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import { fetchContacts } from '../../redux/operations/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import FilterForm from 'components/FilterForm/FilterForm';
import { ContactPageWrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <ContactPageWrapper>

        <title>Your contacts</title>

          <Suspense fallback={<h2>Loading...</h2>}>
          <ContactsForm />
            <div>{isLoading && 'Request in progress...'}</div>
          <div>
            <FilterForm />
            <ContactList />  
          </div>
         </Suspense>
    </ContactPageWrapper>
  );
}

export default ContactsPage