import styled from "styled-components";
import {flexCollumCenter} from '../../config';

export const Nav = styled.nav`
    ${flexCollumCenter}
    justify-content: center;
    width: 100vw;
    height: 65vh;
    margin-bottom: 30px;

    .nav__item-img{
        width: 300px;
        height: 250px;

        :focus {
            border-color: red;
        }
    }

    .nav__item-input{
        width: 275px;
        padding: 8px;
        border-radius: 8px;
        border: none;
        margin-bottom: 20px;
    }

    button{
        width: 120px;
        height: 40px;
        padding: 5px;
        border-radius: 8px;
        background-color: transparent;
        border: 2px solid #00b5cc;
        font-family: 'Press Start 2P', sans-serif;
        cursor: pointer;
        transition: all 600ms ease;

        :hover{
            background-color: #00b5cc;
            color: white;
            transform: translateX(10px);  
        }
    }

    .nav__filter-species{
        display: flex;
        margin: 12px;
        gap: 12px;
    }

    .nav__filter-status{
        display: flex;
        margin: 12px;
        gap: 12px;
    }


`