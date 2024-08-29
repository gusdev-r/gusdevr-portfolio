import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const HeaderComp = styled.header`
  height: 4.5rem;
  width: 100%;
  background-color: var(--black1);
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
  z-index: 1000;
  @media ${breakpoint.sm1} {
    height: 3.8rem;
  }
`

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 4rem;
  justify-content: flex-end;
`

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`

export const ContainerElements = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Element = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 8px 8px;
  color: var(--greyDefault);
  cursor: pointer;
  transition: var(--transition-all-slow);
  font-size: 14px;
  &:hover {
    color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
    padding: 4px 8px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 2.5rem;
  gap: 0.5rem;
`

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  padding: 8px 16px;
  color: var(--greyDefault);
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--greyDefault);
  transition: var(--transition-all-slow);
  font-size: 14px;
  margin-left: 8px;
  &:hover {
    color: var(--whiteDefault);
    border-color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
    padding: 4px 12px;
  }
`
