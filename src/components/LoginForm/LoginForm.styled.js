import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginInput = styled.input`
    font-size: 16px;
    width: 320px;
    padding: 8px;
    margin-top: 4px;
    outline: none;
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 4px;
    
    &:focus {
        border: 1px solid #b3dcfd;
    }
`

export const LoginLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    color: darkblue;
       
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`

export const LoginButton = styled.button`
    display: inline-block;
    font-size: 16px;
    min-width: 150px;
    padding: 8px;
    cursor: pointer;
    color: white;
    background-color: darkblue;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #b3dcfd;
        color: darkblue;
    }
`