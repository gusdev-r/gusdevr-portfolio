import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import logo from '../../assets/images/snug.png'
import { Footer } from '../../components/Footer/footer'
import FormInput from '../../components/FormInput/formInput'
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
  AlternativeJoin,
  JoinLink,
  GoogleLogin,
  ConfirmationTitle,
  ConfirmContainer,
} from './style'
import formValidation from './validation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import registerUseCase from '../../usecases/registerUseCase'
import { CgSpinnerTwo } from 'react-icons/cg'
import { StyledLink, StyledLinkButton } from '../../components/styledLink/style'
import UniversalButton from '../../components/UniversalButton/button'

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(true)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formValidation),
  })

  const onSubmit = (data) => {
    registerUseCase
      .execute(data)
      .then(toast.success('Email de confirmação enviado!'))
      .catch((error) => {
        toast.error('Algo deu errado no seu cadastro!')
      })
  }

  return (
    <>
      <PageContainer>
        <Header />
        <Container>
          <ModalBox>
            {!success ? (
              <FormBox>
                <UniversalTitle color="#FFFFFF">
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
                  <ButtonSubmit type="submit">
                    {isLoading ? (
                      <CgSpinnerTwo className="icon" size={24} />
                    ) : (
                      'Cadastrar'
                    )}
                  </ButtonSubmit>
                  <GoogleLogin> Entrar com Google</GoogleLogin>
                  <AlternativeJoin>Já possui um cadastro? </AlternativeJoin>
                </form>
              </FormBox>
            ) : (
              <ConfirmContainer>
                <ConfirmationTitle>Confirme sua conta!</ConfirmationTitle>
                <SubTitle>
                  Muito obrigado por cadastrar-se na Snug. Confirme a criação da
                  sua conta clicando no botão enviando no seu e-mail.
                </SubTitle>
                <StyledLinkButton to="/">Voltar</StyledLinkButton>
              </ConfirmContainer>
            )}
          </ModalBox>
        </Container>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Signup
