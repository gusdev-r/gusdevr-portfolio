import {
  GlobalStyle,
  Container,
  FormBox,
  Logo,
  LogoBox,
  ModalBox,
  SubTitle,
} from "./style";
import UniversalTitle from "../../components/UniversalTitle/title";
import UniversalButton from "../../components/UniversalButton/button";
import FormInput from "../../components/FormInput/formInput";
import logo from "../../assets/images/snug.png";
import { Header } from "../../components/Header/header";

export default function Singup(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ModalBox>
          <LogoBox>
            <Logo src={logo} alt="logo" />
          </LogoBox>
          <FormBox>
            <UniversalTitle color="hsl(0, 0%, 0%)">
              {" "}
              Faça seu cadastro{" "}
            </UniversalTitle>
            <SubTitle> Faça deste o melhor lugar para o seu bolso! </SubTitle>
            <FormInput
              name={"Usuário"}
              type={"text"}
              placeholder={"Insira seu usuário"}
            />
            <FormInput
              name={"Email"}
              type={"email"}
              placeholder={"Insira seu email"}
            />
            <FormInput
              name={"Senha"}
              type={"password"}
              placeholder={"Insira seu password"}
            />
            <UniversalButton> Registrar </UniversalButton>
          </FormBox>
        </ModalBox>
      </Container>
    </>
  );
}
