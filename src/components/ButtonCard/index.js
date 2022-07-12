import styled from "styled-components";

export const ButtonCard = styled.button`
    background-color: ${(props) => props.color || 'blue'};
    color: white;
    font-weight: bold;
    opacity: 0.8;
    border: none;
    border-radius: 2px;
    padding: 7px;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    transition: 400ms ease;
    
    :hover{
        transform: scale(1.08);
    }
`