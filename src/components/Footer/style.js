import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const FooterContainer = styled.footer`
  height: 7.8rem;
  width: 100%;
  background-color: hsl(0, 0%, 9%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`;

export const MainLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 4px;
`;

export const MainLink = styled.a`
  color: gray;
  text-decoration: none;
  font-size: 16px;
  padding: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 70%;
  height: 2px;
  margin: 10px;
  background-color: #fff;
`;

export const PolicyLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 20px;
  padding: 2px;
`;

export const PolicyLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  padding: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
`;

export const DevelopedByContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
`;

export const DeveloperLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: white;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;
