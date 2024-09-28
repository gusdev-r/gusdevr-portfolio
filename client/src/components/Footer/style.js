import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

export const FooterContainer = styled.footer`
  width: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 5rem;
  z-index: 1000;
  @media ${breakpoint.sm2} {
    padding: 10px;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;
`

export const Logo = styled.img`
  max-width: 9.5rem;
  height: auto;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media ${breakpoint.sm2} {
    gap: 10px;
  }
`

export const MainLink = styled.a`
  color: var(--greyDefault);
  text-decoration: none;
  font-size: 14px;
  padding: 4px;
  transition: var(--transition-color-slow);
  &:hover {
    color: var(--whiteDefault);
    text-decoration: underline;
  }
  @media ${breakpoint.sm1} {
    font-size: 12px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`

export const SocialIcon = styled.a`
  color: var(--whiteDefault);
  font-size: 24px;
  transition: var(--transition-color-fast);

  &:hover {
    color: var(--grey2);
  }
`

export const Copyright = styled.div`
  font-size: 10px;
  color: var(--whiteDefault);
  text-align: center;
  width: 100%;
  margin-top: 20px;
`

export { FaInstagram, FaLinkedin, FaGithub, FaDiscord }
