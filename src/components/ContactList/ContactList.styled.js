import styled from "@emotion/styled";

export const ContactsList = styled.ul`
    margin-top: 0;
    padding-left: 0;
`

export const ContactItem = styled.li`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    padding: 8px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const ContactDetails = styled.span`
    font-size: 20px;
    margin: 0;
    color: darkblue;
`

export const DeleteButton = styled.button`
    display: inline-block;
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    min-width: 50px;
    cursor: pointer;
    color: white;
    background-color: darkblue;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #b3dcfd;
        color: darkblue;
    }
`