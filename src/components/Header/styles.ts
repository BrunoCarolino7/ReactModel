import styled from "styled-components";

export const Container = styled.header`

background: var(--blue); 
padding: 2rem 1rem 12rem;
display: flex;
align-items: center;
`
export const Wrapper = styled.header`

    display: flex;
    justify-content: space-between;
    width: 940px;
    margin: 0 auto;

    img{
        cursor: pointer;
    }

    button{
        font-size: 0.85rem;
        border : none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: var(--shape);        
        background-color: var(--blue-light);
        transition: 300ms;
    }

    button:hover{
        transition: 300ms;
        opacity: 0.6;
    }

`