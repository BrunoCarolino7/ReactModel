import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`

    h2{
        color: var(--text-body);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(0, 0, 0, 0.3); 
        font-weight: 400;
        font-size: 1rem;
        background: #e7e9ee;
        
        &::placeholder{ //pega a prop dentro do input
            color: var(--text-body) ;
        }

        & + input{ //todo input a partir do segundo terá uma margem em cima
            margin-top: 1rem;
        }       
    }
`
export const TransactionTypeContainer = styled.div`

    display:flex;
    justify-content: space-between;
    margin: 10px 0;    

    button{
        padding: 0.5rem;
        width: 49%;      
        border: 0.5 solid;
    }

    span{
        display: inline-block;
        align-items: center;       
    }
`
interface RadioBoxprops {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxprops>`

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;    

    background: ${(props) => props.isActive
        ? transparentize(0.9, props.activeColor)
        : 'transparent'
    };

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-size: 1rem;
    margin-top: 0.5rem;
    transition: 300ms;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        filter: brightness(0.9);
    }
`
export const Botao = styled.button`

    /* button[type="submit"]{//Botão do tipo submit   
        color: #000000;
    } */

    color: #fff;
    background: var(--green);
    border: none;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    transition: 300ms;

    &:hover{
        filter: brightness(0.9);
    }
`