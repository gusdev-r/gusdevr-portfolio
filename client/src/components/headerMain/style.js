import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const HeaderComp = styled.header`
  height: 4.5rem;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  position: sticky;
  background-color: none;
  backdrop-filter: blur(5px);
  transition: var(--transition-color-slow);
  z-index: 1000;
  @media ${breakpoint.md1} {
    height: 4rem;
  }
  @media ${breakpoint.sm1} {
    height: 3rem;
  }
`
export const HBtn = styled.div`
  display: none;
  @media ${breakpoint.sm2} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 3rem;
  }
`

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  justify-content: flex-end;
  @media ${breakpoint.md1} {
    margin-right: 24px;
  }
  @media ${breakpoint.sm0} {
    margin-left: 4px;
    margin-right: 8px;
  }
`

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`

export const ContainerElements = styled.ul`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right: 3rem;
  gap: 20px;

  .active {
    color: var(--whiteDefault);
  }

  @media ${breakpoint.md1} {
    margin-left: 14px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`

export const Element = styled.button`
  text-decoration: none;
  padding: 4px 4px;
  background: none;
  border: none;
  color: var(--grey6);
  cursor: pointer;
  transition: all ease 0.5s;
  &:hover {
    color: var(--whiteDefault);
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 64px;
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
`

export const ButtonChoice = styled.button`
  text-align: center;
  padding: 4px 18px;
  color: var(--grey6);
  cursor: pointer;
  border: none;
  transition: var(--transition-color-fast);
  background: none;
  text-decoration: none;

  border-radius: 8px;
  &:hover {
    color: var(--whiteDefault);
    background: var(--grey1);
    border-color: var(--whiteDefault);
  }
  @media ${breakpoint.bg1} {
    padding: 3px 18px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  transition: var(--transition-all-slow);
  color: var(--greyDefault);
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
  &:hover {
    color: var(--whiteDefault);
    svg {
      color: var(--whiteDefault);
    }
  }

  @media ${breakpoint.bg1} {
    padding: 4px 8px;
  }

  @media ${breakpoint.sm2} {
    display: none;
  }
`
export const BtnMenu = styled.button`
  display: none;

  @media ${breakpoint.sm2} {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      font-size: 1.8rem;
      transition: var(--transition-color-fast);
      color: var(--grey4);
    }

    &:hover svg {
      color: var(--whiteDefault);
    }
  }
`

export const HeaderMenu = styled.div`
  display: none;
  z-index: 1000;
  @media ${breakpoint.sm2} {
    transition: all ease-in-out 0.5s;
    background: linear-gradient(to right, rgb(16, 16, 16), rgb(0, 0, 0) 160%);
    height: 100vh;
    width: 20rem;
    padding: 1rem;
    gap: 3rem;
    right: 0;
    border-left: 1px solid var(--grey2);
    position: fixed;
    display: flex;
    flex-direction: column;
  }
  @media ${breakpoint.sm0} {
    width: 70vw;
  }
`
export const MenuContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
