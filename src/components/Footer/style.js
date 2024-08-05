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
  /* background-color: red; */
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  /* background-color: yellow; */
`;

export const MainLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 4px;
`;

export const MainLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 4px;
  &:hover {
    text-decoration: underline;
  }
  /* background-color: blue; */
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
  /* background-color: gray; */
  padding: 2px;
`;

export const PolicyLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  /* background-color: purple; */
  padding: 2px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: white;
  text-align: center;
  /* background-color: gray; */
  margin-top: 20px;
  width: 100%;
`;
