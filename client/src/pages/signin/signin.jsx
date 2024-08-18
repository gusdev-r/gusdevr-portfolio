import {
  GlobalStyle,
  Container,
  FormBox,
  Logo,
  LogoBox,
  ModalBox,
  SubTitle,
  ForgotPasswordContainer,
  ForgotPasswordLink,
} from "./style";
import UniversalTitle from "../../components/UniversalTitle/title";
import UniversalButton from "../../components/UniversalButton/button";
import FormInput from "../../components/FormInput/formInput";
import logo from "../../assets/images/snug.png";

export default function Singin(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ModalBox>
          <LogoBox>
            <Logo src={logo} alt="logo" />
          </LogoBox>
          <FormBox>
            <UniversalTitle color="hsl(0, 0%, 0%)">
              {" "}
              Faça seu login{" "}
            </UniversalTitle>
            <SubTitle>
              {" "}
              Bem-vindo de volta! Faça login para continuar.{" "}
            </SubTitle>
            <FormInput
              name={"Usuário ou Email"}
              type={"text"}
              placeholder={"Insira seu usuário ou email"}
            />
            <FormInput
              name={"Senha"}
              type={"password"}
              placeholder={"Insira seu password"}
            />
            <ForgotPasswordContainer>
              <ForgotPasswordLink href="/forgot-password">
                Esqueci minha senha
              </ForgotPasswordLink>
            </ForgotPasswordContainer>
            <UniversalButton> Entrar </UniversalButton>
          </FormBox>
        </ModalBox>
      </Container>
    </>
  );
}
