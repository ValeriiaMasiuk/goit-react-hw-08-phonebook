import styled from "@emotion/styled";

export const FilterWrapper = styled.div`
    margin-bottom: 40px;
    min-width: 320px;
    padding: 16px;
`

export const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: darkblue;
`

export const FilterInput = styled.input`
    font-size: 16px;
    padding: 8px;
    margin-top: 8px;
    outline: none;
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 4px;

    &:focus {
        border: 1px solid #b3dcfd;
    }
`