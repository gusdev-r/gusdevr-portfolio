import styled from "styled-components";

export const Button = styled.button`
  height: 3rem;
  width: 10rem;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.color || "black"};
  color: white;
  transition: background-color 0.5s ease;
`;
