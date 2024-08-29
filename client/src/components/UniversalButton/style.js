import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 13px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.color || 'var(--blackDefault)'};
  color: var(whiteDefault);
  transition: var(--transition-bg-boxshadow);
  padding: 16px 28px;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`
