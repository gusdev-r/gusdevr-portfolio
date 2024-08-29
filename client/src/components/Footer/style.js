import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--black1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @media ${breakpoint.sm2} {
    padding: 10px;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 150px;
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

// export const PolicyContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 30px;
//   margin-bottom: 20px;
//   @media ${breakpoint.sm2} {
//     flex-direction: column;
//     gap: 15px;
//   }
// `

// export const PolicyLink = styled.a`
//   color: var(--whiteDefault);
//   text-decoration: none;
//   font-size: 12px;
//   transition: var(--transition-color-fast);

//   &:hover {
//     color: var(--grayDefault);
//     text-decoration: underline;
//   }
//   @media ${breakpoint.sm2} {
//     font-size: 10px;
//   }
// `

export const Copyright = styled.div`
  font-size: 10px;
  color: var(--whiteDefault);
  text-align: center;
  width: 100%;
  margin-top: 20px;
`

export { FaInstagram, FaLinkedin, FaGithub, FaDiscord }
