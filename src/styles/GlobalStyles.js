import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root{
        width: 80vw;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
    
    body{
        background-color: #dcdcdc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }
`;