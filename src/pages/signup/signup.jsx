import logo from "../../assets/images/snug.png";
import { Footer } from "../../components/Footer/footer";
import FormInput from "../../components/FormInput/formInput";
import { Header } from "../../components/Header/header";
import UniversalButton from "../../components/UniversalButton/button";
import UniversalTitle from "../../components/UniversalTitle/title";
import { Container, FormBox, Logo, LogoBox, ModalBox, SubTitle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import formValidation from "./validation";

export default function Singup() {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(formValidation),
  });
  return (
    <>
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
              placeholder={"Insira seu senha"}
            />
            <UniversalButton type="submit"> Cadastrar </UniversalButton>
          </FormBox>
        </ModalBox>
        <Footer />
      </Container>
    </>
  );
}
