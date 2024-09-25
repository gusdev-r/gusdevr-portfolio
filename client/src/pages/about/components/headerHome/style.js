import styled from 'styled-components'
import breakpoint from '../../../../styles/breakpoints'

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
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 64px;
  gap: 20px;

  .active {
    color: var(--whiteDefault);
  }

  @media ${breakpoint.md1} {
    margin-left: 14px;
  }
  @media ${breakpoint.sm1} {
    justify-content: center;
    gap: 4px;
  }
  @media ${breakpoint.sm0} {
    margin-left: 0px;
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
    font-size: 13px;
    padding: 3px 18px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`
