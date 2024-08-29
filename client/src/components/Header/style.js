import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const HeaderComp = styled.header`
  height: 4.2rem;
  width: 100%;
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
  z-index: 1000;
  @media ${breakpoint.sm1} {
    height: 3.8rem;
  }
`

export const ContainerElements = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 20px 30px 20px 60px;
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
`

export const Element = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 8px 16px;
  color: var(--gray0);
  cursor: pointer;
  transition: all ease 0.5s;
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

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-left: 50px;
  margin-right: 30px;
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
  background-color: var(--gray1);
  border: 1px solid var(--gray3);

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
    background-color: #303030;
    color: #fff;
  }
  @media ${breakpoint.bg1} {
    font-size: 11px;
    width: 7.5rem;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  color: var(--gray2);
  cursor: pointer;
  font-size: 14px;

  svg {
    margin-right: 10px;
    font-size: 14px;
  }
  &:hover {
    color: var(--whiteDefault);
    svg {
      color: var(--whiteDefault);
    }
  }

  @media ${breakpoint.bg1} {
    font-size: 13px;
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
      transition: color 0.3s ease;
      color: var(--gray2);
      font-size: 22px;
    }

    &:hover svg {
      color: var(--whiteDefault);
    }
  }
`

export const HeaderMenu = styled.div`
  display: none;
  @media ${breakpoint.sm2} {
    transition: all ease-in-out 0.5s;
    background: linear-gradient(to right, rgb(16, 16, 16), rgb(0, 0, 0) 160%);
    height: 100vh;
    width: 20rem;
    padding: 1rem;
    gap: 3rem;
    z-index: 10000;
    right: 0;
    border-left: 2px solid var(--gray3);
    position: fixed;
    display: flex;
    flex-direction: column;
  }
`
export const MenuContainer = styled.section`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  /* background-color: red; */
`

export const ElementMenu = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  text-decoration: none;
  padding: 8px 16px;
  color: var(--gray0);
  cursor: pointer;
  transition: all ease 0.5s;
  font-size: 14px;
  margin-right: 20px;
  text-decoration: underline;

  &:hover {
    color: var(--whiteDefault);
  }

  svg {
    transition: color 0.3s ease;
    color: var(--gray2);
    font-size: 14px;
    margin-right: 10px;
  }

  &:hover svg {
    color: var(--whiteDefault);
  }
`
