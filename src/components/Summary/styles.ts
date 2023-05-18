import styled from "styled-components";

export const Container = styled.div`    
    margin: 0 auto;
    width: 940px;

    .box{    
        margin-top: -4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong{
            font-size: 2rem;            
            font-weight: 500;            
        }

        .box3{
            background-color: var(--green);
            color: white;
        }
    }    

    .box-items {
        margin-bottom: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        small{            
            font-size: 0.9rem;
        }
        
        img{
            width: 1.6rem;
        }              
    }    

    .box1, .box2, .box3{        
        background: var(--shape);
        padding: 1.2rem 1.5rem;
        border-radius: 5px;
        width: 295px;
        color: var(--title)
    }
`