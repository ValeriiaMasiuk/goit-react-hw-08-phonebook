import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, UserNavigation, UserName } from './UserMenu.styled';

import {ImExit} from "react-icons/im";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigation>
      <UserName>Hello, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <ImExit/>
      </Button>
    </UserNavigation>
  );
};