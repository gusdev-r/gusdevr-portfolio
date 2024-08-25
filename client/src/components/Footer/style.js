import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @media ${breakpoint.sm2} {
    flex-direction: column;
  }
`

export const LogoBox = styled.div`
  height: 100%;
  max-width: 14rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${breakpoint.bg1} {
    margin-left: 0;
    margin-right: 1rem;
  }
`

export const Logo = styled.img`
  height: 100%;
  max-width: 8rem;
  @media ${breakpoint.sm1} {
    max-width: 7rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  @media ${breakpoint.sm2} {
    flex-direction: column;
    margin-top: 40px;
  }
`

export const MainLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 4px;
  @media ${breakpoint.bg1} {
    gap: 2rem;
  }
`

export const MainLink = styled.a`
  color: gray;
  text-decoration: none;
  font-size: 13px;
  padding: 4px;
  transition: color 0.3s ease;
  &:hover {
    color: white;
    text-decoration: underline;
  }
  @media ${breakpoint.bg1} {
    font-size: 11px;
    padding: 2px;
  }
  @media ${breakpoint.sm1} {
    font-size: 10px;
    padding: 2px;
  }
`

export const Divider = styled.div`
  width: 70%;
  height: 2px;
  margin: 10px;
  background-color: #fff;
`

export const PolicyLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 20px;
  padding: 2px;
`

export const PolicyLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 11px;
  padding: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
  @media ${breakpoint.bg1} {
    font-size: 9px;
    padding: 1px;
  }
`

export const DevelopedByContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
  @media ${breakpoint.bg1} {
    text-align: center;
    gap: 10px;
  }
  @media ${breakpoint.sm2} {
    flex-direction: column;
  }
`

export const DeveloperLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
  @media ${breakpoint.bg1} {
    font-size: 10px;
  }
`

export const Copyright = styled.div`
  font-size: 7px;
  color: white;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`
