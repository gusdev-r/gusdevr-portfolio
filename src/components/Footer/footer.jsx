import logo from "../../assets/images/snug.png"; // Atualize o caminho conforme necessário
import {
  FooterContainer,
  LogoBox,
  Logo,
  MainLinks,
  MainLink,
  Divider,
  PolicyLinks,
  PolicyLink,
  Copyright,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoBox>
        <Logo src={logo} alt="Logo" />
      </LogoBox>
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
      <Copyright>&copy; 2024 Your Company. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
