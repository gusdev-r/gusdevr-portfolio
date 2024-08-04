import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(
    to right,
    rgb(34, 34, 34),
    rgba(249, 249, 249, 0.476) 160%
  );
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalBox = styled.div`
  height: 73vh;
  width: 68vw;
  border-radius: 14px;
  background-color: rgb(18, 96, 23);
  background: linear-gradient(
    to right,
    rgb(34, 34, 34),
    rgba(249, 249, 249, 0.476) 160%
  );
  display: flex;
  box-shadow: 0px 0px 15px 8px rgba(44, 44, 44, 0.086);
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const LogoBox = styled.div`
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 19rem;
`;

export const FormBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  background-color: hsl(0, 0%, 100%);
`;

export const SubTitle = styled.text`
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 1.8rem;
`;
