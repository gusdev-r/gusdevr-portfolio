import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6rem 0rem 0.6rem 0rem;
  align-items: start;
  transition: 0.3s;
`;

export const Label = styled.label`
  font-weight: 500;
  margin: 0px 0px 2px 0px;
  font-size: 16px;
`;

export const Input = styled.input`
  height: 2.8rem;
  width: 22rem;
  border-radius: 13px;
  border: 0.01rem solid hsl(0, 0%, 70%);
  font-size: 14px;
  padding-left: 1rem;
  color: hsl(0, 0%, 70%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.015);
  &:focus {
    outline: none;
    border-color: hsl(0, 0%, 50%);
    color: hsl(0, 0%, 50%);
    transition: color 0.5s, border-color 0.5s;
  }
`;

export const ErrorText = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  color: #c90707;
  padding: 0.5rem 0 0 0;
`;
