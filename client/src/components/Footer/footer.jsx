import React from 'react'
import logo from '../../assets/images/g-black-logo-removebg.png'
import {
  FooterContainer,
  LogoBox,
  Logo,
  LinksContainer,
  MainContainer,
  MainLink,
  SocialIcons,
  SocialIcon,
  Copyright,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from './style'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterContainer>
      <LogoBox>
        <Logo src={logo} alt="Logo" />
      </LogoBox>

      <LinksContainer>
        <MainContainer>
          <MainLink onClick={() => navigate('/')}>About</MainLink>
          <MainLink onClick={() => navigate('/projects')}>Projetos</MainLink>
          <MainLink onClick={() => navigate('/knowledges')}>
            Conhecimentos
          </MainLink>
          <MainLink onClick={() => navigate('/social')}>Redes sociais</MainLink>
        </MainContainer>

        <SocialIcons>
          <SocialIcon
            href="https://www.instagram.com/gusdev_r/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/gusdev-r/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/gusdev-r"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://discord.gg/NHAYF9EryF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SocialIcon>
        </SocialIcons>
        <Copyright>
          &copy; 2024 Gustavo Henrique Moreira. All rights reserved.
        </Copyright>
      </LinksContainer>
    </FooterContainer>
  )
}
