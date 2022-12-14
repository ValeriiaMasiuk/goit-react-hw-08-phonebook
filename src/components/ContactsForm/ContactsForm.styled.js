import styled from "@emotion/styled";

export const FormWrapper = styled.div`
align-items: center;
    min-width: 350px;
`

export const AddForm = styled.form`
    padding: 16px;
    display: flex;
    flex-direction: column;
`

export const AddLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: darkblue;
    
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const AddInput = styled.input`
    font-size: 16px;
    margin-top: 8px;
    padding: 8px;
    outline: none;
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 4px;
    
    &:focus {
        border: 1px solid #b3dcfd;
    }
`

export const AddButton = styled.button`
    display: inline-block;
    font-size: 16px;
    max-width: 150px;
    margin-left: 81px;
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