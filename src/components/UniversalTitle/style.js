import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.color || "black"};
  margin: 10px 0;
  font-weight: 700;
  text-align: center;
  transition: color 0.5s ease;
`;
