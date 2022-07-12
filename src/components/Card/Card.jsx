import React from 'react'
import {useState} from 'react'
import { Container} from "./style.js"
import image from './portal.png'
import CardModal from '../CardModal/CardModal.jsx'
import {ButtonCard} from '../ButtonCard'
 
function Card({url_img, name, status, origin, gender}){
      
    const [statusShowCard, setShowCardModal] = useState(false)

    return(
        <Container>

            <ButtonCard color='blue' onClick={() => setShowCardModal(!statusShowCard)}>+</ButtonCard>
            
            <div className='container__character'>

                <img className='container__img-character' src={url_img} alt={`imagem do personagem`} loading='lazy'></img>

                <div className='container-descriptions-character'>
                    <h2 className='container__name'>{name}</h2>
                    <h3 className={`'container__status', ${status === 'Alive' ? 'container__status--alive' : status === 'Dead' ? 'container__status--dead' : 'container__status--unknown'}`} >Status: {status}</h3>
                </div>

                <img className='container__img-portal' src={image} alt="ilustração portal"></img> 

            </div>

            {statusShowCard ? (<CardModal setShowCardModal={setShowCardModal} name={name} status={status} url_img={url_img} origin={origin} gender={gender}>
                
            </CardModal>) : null}
            
        </Container>
    )
}


export default Card;