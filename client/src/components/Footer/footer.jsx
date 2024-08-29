import React from 'react'
import logo from '../../assets/images/snug.png'
import {
  FooterContainer,
  LogoBox,
  Logo,
  LinksContainer,
  MainContainer,
  MainLink,
  SocialIcons,
  SocialIcon,
  // PolicyContainer,
  // PolicyLink,
  Copyright,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from './style'

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoBox>
        <Logo src={logo} alt="Logo" />
      </LogoBox>

      <LinksContainer>
        <MainContainer>
          <MainLink href="#">Home</MainLink>
          <MainLink href="#">About</MainLink>
          <MainLink href="#">Services</MainLink>
          <MainLink href="#">Blog</MainLink>
          <MainLink href="#">Contact</MainLink>
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

        {/* <PolicyContainer>
          <PolicyLink href="#">Privacy Policy</PolicyLink>
          <PolicyLink href="#">Terms of Service</PolicyLink>
          <PolicyLink href="#">Cookie Settings</PolicyLink>
        </PolicyContainer> */}

        <Copyright>&copy; 2024 Snug. All rights reserved.</Copyright>
      </LinksContainer>
    </FooterContainer>
  )
}
