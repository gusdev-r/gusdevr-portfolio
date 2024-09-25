import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px var(--grey1);
  border-radius: 8px;
  padding: 1px;
  gap: 8px;
  @media ${breakpoint.bg1} {
    gap: 4px;
  }
  @media ${breakpoint.sm2} {
    margin-right: 28px;
  }
  .clicked {
    color: var(--whiteDefault);
    background: var(--grey1);
    border-color: var(--whiteDefault);
  }
`

export const ButtonChoice = styled.button`
  text-align: center;
  padding: 0.4rem;
  width: 14rem;
  color: var(--grey6);
  cursor: pointer;
  border: none;
  transition: var(--transition-color-fast);
  background: none;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 0.5rem;

  @media ${breakpoint.bg1} {
    font-size: 13px;
    padding: 3px 18px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`
