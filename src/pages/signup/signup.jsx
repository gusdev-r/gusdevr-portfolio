import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/snug.png";
import { Footer } from "../../components/Footer/footer";
import FormInput from "../../components/FormInput/formInput";
import { Header } from "../../components/Header/header";
import UniversalTitle from "../../components/UniversalTitle/title";
import {
  ButtonSubmit,
  Container,
  FormBox,
  Logo,
  LogoBox,
  ModalBox,
  PageContainer,
  SubTitle,
} from "./style";
import formValidation from "./validation";

export default function Signup() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  return (
    <>
      <PageContainer>
        <Header />
        <Container>
          <ModalBox>
            <LogoBox>
              <Logo src={logo} alt="logo" />
            </LogoBox>
            <FormBox>
              <UniversalTitle color="hsl(0, 0%, 0%)">
                Faça seu cadastro
              </UniversalTitle>
              <SubTitle>Faça deste o melhor lugar para o seu bolso!</SubTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  type="text"
                  label="Usuário"
                  placeholder="Insira seu usuário"
                  errors={errors}
                  register={register}
                  registerName="username"
                />
                <FormInput
                  type="email"
                  label="Email"
                  placeholder="Insira seu email"
                  errors={errors}
                  register={register}
                  registerName="email"
                />
                <FormInput
                  type="password"
                  label="Senha"
                  placeholder="Insira sua senha"
                  errors={errors}
                  register={register}
                  registerName="password"
                />
                <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
              </form>
            </FormBox>
          </ModalBox>
        </Container>
        <Footer />
      </PageContainer>
    </>
  );
}
