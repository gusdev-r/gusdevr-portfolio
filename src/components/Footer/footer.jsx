import logo from "../../assets/images/snug.png";
import {
  Copyright,
  DevelopedByContainer,
  DeveloperLink,
  Divider,
  FooterContainer,
  LinksContainer,
  Logo,
  LogoBox,
  MainLink,
  MainLinks,
  PolicyLink,
  PolicyLinks,
} from "./style";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoBox>
          <Logo src={logo} alt="Logo" />
        </LogoBox>

        <DevelopedByContainer>
          <DeveloperLink
            href="https://www.instagram.com/vincenzicode/"
            target="_blank"
          >
            Developed by @vincenzicode
          </DeveloperLink>
          <DeveloperLink
            href="https://www.instagram.com/gusdev_r/2"
            target="_blank"
          >
            Developed by @gusdev_r
          </DeveloperLink>
        </DevelopedByContainer>

        <LinksContainer>
          <MainLinks>
            <MainLink href="#">Link One</MainLink>
            <MainLink href="#">Link Two</MainLink>
            <MainLink href="#">Link Three</MainLink>
            <MainLink href="#">Link Four</MainLink>
            <MainLink href="#">Link Five</MainLink>
          </MainLinks>
          <Divider />
          <PolicyLinks>
            <PolicyLink href="#">Privacy Policy</PolicyLink>
            <PolicyLink href="#">Terms of Service</PolicyLink>
            <PolicyLink href="#">Cookie Settings</PolicyLink>
          </PolicyLinks>
          <Copyright>&copy; 2024 Snug. All rights reserved.</Copyright>
        </LinksContainer>
      </FooterContainer>
    </>
  );
};
