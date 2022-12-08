import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const AuthBar = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-evenly;
`

export const AuthLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 12px;
`

