import styled from 'styled-components'
import { Link } from 'react-router-dom'
import breakpoint from '../../styles/breakpoints'

export const StyledLink = styled(Link)`
  color: var(--grey6);
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-color-slow);
  font-size: 0.75rem;
  &:hover {
    color: var(--whiteDefault);
  }
`

export const StyledLinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.75rem;
  height: 3rem;
  color: var(--grey6);
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: var(--grey1);
  text-decoration: none;
  transition: var(--transition-bg-boxshadow);
  &:hover {
    background-color: var(--grey2);
    border: solid 1px var(--grey3);
  }
  &:disabled {
    cursor: not-allowed;
  }
  @media ${breakpoint.md1} {
    font-size: 0.8rem;
    width: 9.75rem;
    height: 3rem;
  }
`
