import { useAuth } from 'hooks';
import { HomeNav, ContactsNav, Nav } from './Navigation.styled';
import { BsHouseDoor } from "react-icons/bs"

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <HomeNav to="/">
        <BsHouseDoor/>
        Home
      </HomeNav>
      {isLoggedIn && (
        <ContactsNav to="/contacts">
          Contacts
        </ContactsNav>
      )}
    </Nav>
  );
};