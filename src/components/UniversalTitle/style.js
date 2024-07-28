import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.color || "#333"};
    margin: 20px 0;
    text-align: center;
    transition: color 0.5s ease;
`;
   
    
