import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const ContactsNav = styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 12px;
`

export const HomeNav = styled(NavLink)`
    color: white;
    padding: 12px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`