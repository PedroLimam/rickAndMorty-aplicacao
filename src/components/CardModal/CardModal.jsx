import React from "react";
import { ButtonCard } from "../ButtonCard";
import { ContainerCardModal } from "./style";


function CardModal({name, status, url_img, setShowCardModal, origin, gender}){

    return (
        <ContainerCardModal>
            <ButtonCard color='red' onClick={()=> setShowCardModal(false)}>X</ButtonCard>

            <div className="containerCardModal__box-character-apresentation">
                <img className="containerCardModal__character-img" src={url_img} alt="imagem do personagem" />
                <div className="containerCardModal__box-nameStatus">
                    <h2 className="containerCardModal__character-name">{name}</h2>
                    <h3 className="containerCardModal__character-status">Status: {status}</h3>
                </div>
            </div>

            <div className="containerCardModal__box-originGender">
                <h3>Origin: {origin}</h3>
                <h3>Gender: {gender}</h3>
            </div>

        </ContainerCardModal>
        )
}

export default CardModal;