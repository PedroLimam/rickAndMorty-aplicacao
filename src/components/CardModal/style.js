import styled from "styled-components";
import { colorCardModal } from "../../config";

export const ContainerCardModal = styled.div`
    width: 270px;
    height: 400px;
    top: 20px;
    background-color: ${colorCardModal};
    position: absolute;
    transform: translate(-35px, -61px);
    z-index: 10;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    .containerCardModal__box-character-apresentation{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
       
        .containerCardModal__character-img{
            width: 101px;
            height: 90px;
            margin: 30px;
            padding: 5px;
            border-radius: 8px;
        }   

        .containerCardModal__box-nameStatus{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 12px;
            gap: 12px;
            align-items: center;
        }
    }

    .containerCardModal__box-originGender{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        font-size: 14px;
        }
    
`