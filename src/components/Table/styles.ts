import styled from "styled-components";

export const Container = styled.div`   

    table{
        
        border-spacing: 0 0.5rem;
        width: 940px;        
        margin: 4rem auto;                 

        td{
            background-color: white;
            padding: 1rem;
            border-radius: 4px;

            &:first-child{
                font-weight: bold;
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: red;
            }
        }      
    }   
    
`
export const Th = styled.th`

    color: var(--text-body);
`