import styled from "styled-components";

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

    button[type="submit"]{//Botão do tipo submit
        width: 100%;
        padding: 0 1.5rem;
        color: #fff;
        height: 4rem;
        background: var(--green);
        border-radius: 0.25rem;
        border: none;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: 300ms;
        font-weight: 600;

        &:hover{
            cursor: pointer;
            filter: brightness(0.9);
        }
    }

`