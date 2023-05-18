import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F2F5;
        --green: #33cc95;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --title:#363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;    
    }

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.50%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; //deixar mais nítido ao diminuir
    }

    body,input, textarea, button {
        font-family: 'Poppins' , 'sans-serif';
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    //estilos de todos os modals, jogamos aqui pro Global 
    .react-modal-overlay{
        
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed; // por mais que o scroll é usado, ele sempre fica no meio da tela 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);        
    }
    
    .react-modal-content{
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 3rem; 
      border-radius: 0.25rem;     
      position: relative; //se a box não tiver com relative, os próximos conteúdos não ficará dentro dele
    }

    .react-modal-button {
        position: absolute;
        right:44rem;
        border: 0;
        background: transparent;
        transition: 300ms;
    }

    .react-modal-button:hover {
        filter: brightness(0.6);
        transition: 300ms;
    }

`