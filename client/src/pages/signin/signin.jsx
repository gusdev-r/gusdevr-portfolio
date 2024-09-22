import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import logo from '../../assets/images/snug.png'
import { Footer } from '../../components/Footer/footer'
import FormInput from '../../components/FormInput/formInput'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/header'
import UniversalTitle from '../../components/UniversalTitle/title'
import {
  ButtonSubmit,
  Container,
  FormBox,
  Logo,
  LogoBox,
  ModalBox,
  PageContainer,
  SubTitle,
} from './style'
import formValidation from './validation'
import { StyledLink } from '../../components/styledLink/style'

const SignIn = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(formValidation),
  })

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
                Faça seu login
              </UniversalTitle>
              <SubTitle>
                Entre na sua conta e aproveite o melhor para o seu bolso!
              </SubTitle>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  type="text"
                  label="Email/Usuário"
                  placeholder="Insira seu email ou usuário"
                  errors={errors}
                  register={register}
                  registerName="emailOrUsername"
                />
                <FormInput
                  type="password"
                  label="Senha"
                  placeholder="Insira sua senha"
                  errors={errors}
                  register={register}
                  registerName="password"
                />
                <ButtonSubmit type="submit">
                  <StyledLink to="/login"> Entrar</StyledLink>
                </ButtonSubmit>
              </form>
            </FormBox>
          </ModalBox>
        </Container>
        <Footer />
      </PageContainer>
    </>
  )
}

export default SignIn
