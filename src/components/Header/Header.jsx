import React, { useRef} from "react";
import { Nav } from "./style";
import logorm from './logorm.png'

function Header({filterArray, filterSpecie, filterDead, filterAlive}){

    const researchedCharacter = useRef()

    return(
       
        <header>
            <Nav>
                <img className="nav__item-img" src={logorm} alt="logo Rick and Morty" />
                <input 
                    className="nav__item-input"
                    ref={researchedCharacter}
                    type="text" 
                    placeholder="Pesquise um personagem desejado"
                />
                <button onClick={() => filterArray(researchedCharacter.current.value)}>Buscar</button>

                <div className="nav__filter-species" >
                    <button onClick={() => filterSpecie('Alien')}>Alien</button>
                    <button onClick={() => filterSpecie('Human')}>Human</button>
                </div>

                <div className="nav__filter-status" >
                    <button onClick={() => filterDead('Dead')}>Dead</button>
                    <button onClick={() => filterAlive('Alive')}>Alive</button>
                </div>
                
            </Nav>
        </header>  
    )
}

export default Header;