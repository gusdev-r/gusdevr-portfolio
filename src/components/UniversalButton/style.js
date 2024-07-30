import styled from "styled-components";

export const Button = styled.button`
  height: 3rem;
  width: 10rem;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.color || "black"};
  color: white;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  padding: 2px;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`;
