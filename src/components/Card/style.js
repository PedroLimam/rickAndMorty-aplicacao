import styled from 'styled-components';
import { colorCard, colorStatusUnknown, colorStatusDead, colorStatusAlive, flexCollumCenter, subtitleGray } from '../../config';
import { ButtonCard } from '../ButtonCard';

export const Container = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 20px 25px 80px;
    transition: all 300ms ease;
    border-radius: 12px;
    cursor: pointer;
    position: relative;

    :hover{
        transform: translate3d(-5px, 10px, 5px);
        box-shadow: 0px 0px 34px -13px rgba(34,139,34,1);
    }

    ${ButtonCard}{
        font-size: 15px;
        padding: 5px;
    }

    .container__character{
        background-color: ${colorCard};
        border-radius: 12px;
        min-width: 200px;
        max-width: fit-content;
        min-height: 300px;
        max-height: 300px;
        text-align: center;
    
        .container__img-portal{
            position: absolute;
            display: none;
            width: 380px;
            top: 130px;
            right: -72px;
        }

        :hover{
            .container__img-portal{
                display: block;
                z-index: -4;
            }
        }
    
        .container__img-character{
            width: 100%;
            height: 180px;
            border-radius: 8px;
        }
    
        .container-descriptions-character{
            ${flexCollumCenter}
            justify-content: space-between;     
            margin-top: 5px;
            padding: 5px;
        
            .container__name{
                font-size: 12px;
                line-height: 16px; 
                font-family: 'Press Start 2P', sans-serif;
                margin-bottom: 5px;
            }
            .container__status{
                font-size: 17px;
                color: ${subtitleGray};
            }
        
            .container__status--alive{
                border-bottom: 2px solid ${colorStatusAlive};
            }
        
            .container__status--dead{
                border-bottom: 2px solid ${colorStatusDead};
            }
            
            .container__status--unknown{
                border-bottom: 2px solid ${colorStatusUnknown};
            }
        }   
    }  
`