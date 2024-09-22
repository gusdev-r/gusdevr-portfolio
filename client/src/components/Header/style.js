import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const HeaderComp = styled.header`
  height: 4.5rem;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  background: none;
  transition: var(--transition-color-slow);
  @media ${breakpoint.sm1} {
    height: 3.8rem;
  }
  @media ${breakpoint.sm2} {
    position: fixed;
    justify-content: space-between;
  }
`

export const ContainerElements = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 64px;
  gap: 20px;
  &.active > a {
    color: var(--whiteDefault);
  }
  &.disabled > a {
    color: var(--whiteDefault);
    pointer-events: none;
  }
  @media ${breakpoint.bg1} {
    gap: 2rem;
    padding: 20px 30px 20px 20px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`

export const Element = styled.button`
  text-align: center;
  text-decoration: none;
  padding: 4px 4px;
  background: none;
  border: none;
  color: var(--grey6);
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
  }
  @media ${breakpoint.sm0} {
    font-size: 9px;
  }
  @media ${breakpoint.sm2} {
    justify-items: end;
  }
`

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 9px;
  color: var(--grey6);
  cursor: pointer;
  border: none;
  transition: var(--transition-color-slow);
  background: none;
  text-decoration: none;

  border-radius: 8px;
  &:hover {
    color: var(--whiteDefault);
    background: var(--grey1);
    border-color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
    padding: 3px 12px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }

  svg {
    font-size: 14px;
  }
  &:hover {
    color: var(--whiteDefault);
    svg {
      color: var(--whiteDefault);
    }
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 90%;
  flex-direction: column;
  border: none;
  border-radius: 8px;
  background-color: var(--grey1);
  border: 1px solid var(--grey2);

  ${Dropdown}:hover & {
    display: flex;
  }
  @media ${breakpoint.bg1} {
    padding: 0.5rem 0;
    margin: 0.5rem 0 0;
    font-size: 10px;
    top: 70%;
  }
`

export const DropdownItem = styled.a`
  width: 10rem;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  margin: 2px 4px;
  color: var(--whiteDefault);
  text-decoration: none;
  transition: all 0.4s;
  font-size: 14px;

  &:hover {
    background-color: var(--grey2);
    color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 11px;
    width: 7.5rem;
  }
`

export const BtnMenu = styled.button`
  display: none;

  @media ${breakpoint.sm2} {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    text-decoration: none;
    border: none;
    background: none;
    margin-right: 2rem;
    cursor: pointer;

    svg {
      transition: var(--transition-color-fast);
      color: var(--grey4);
      font-size: 1.5rem;
    }

    &:hover svg {
      color: var(--whiteDefault);
    }
  }
`

export const HeaderMenu = styled.div`
  display: none;
  @media ${breakpoint.sm2} {
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transition: all ease-in-out 0.5s;
    background: var(--black1);
    height: 100vh;
    width: 25rem;
    padding: 1rem;
    gap: 3rem;
    right: 0;
    border-left: 4px solid var(--grey1);
    position: fixed;
    display: flex;
  }
`
export const MenuContainer = styled.section`
  display: flex;
  width: 30rem;
  height: 20rem;
  align-items: flex-start;
  justify-content: flex-start;
  /* flex-direction: column;/ */
  gap: 2rem;
  background-color: red;
`

export const ElementBtn = styled.button`
  text-align: center;
  text-decoration: none;
  padding: 4px 4px;
  background: none;
  border: none;
  color: var(--grey6);
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
  }
  @media ${breakpoint.sm0} {
    font-size: 9px;
  }
`
