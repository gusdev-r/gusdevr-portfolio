import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 20rem;
  width: 100%;
  position: relative;
  background-color: hsl(0, 0%, 9%);
  display: flex;
  align-items: center;
  //   top: 0;
  //   right: 0;
  //   background-color: hsl(0, 0%, 9%);
  //   align-itens: center;
  //   padding: 20px 0;
  //   position: fixed;
  //   width: 100%;
  //   height: 6.8rem;
  //   border-top: 1px solid #dee2e6;
`;

export const LogoBox = styled.div`
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  height: 100px;
  background-color: gray;
`;

export const MainLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 20px;
  margin-left: 65.5rem;
  background-color: gray;
`;

export const MainLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 35%;
  height: 1px;
  background-color: gray;
  margin: 20px auto;
  margin-left: 71rem;
`;

export const PolicyLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 20px;
  background-color: gray;
  margin-left: 66rem;
`;

export const PolicyLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: white;
  margin-left: 85rem;
  background-color: gray;
`;
