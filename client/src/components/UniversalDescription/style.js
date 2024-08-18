import styled from "styled-components";

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.color || "black"};
  margin: 0%.5rem 0;
  line-height: 1.5;
  text-align: ${(props) => props.align || "left"};
`;
