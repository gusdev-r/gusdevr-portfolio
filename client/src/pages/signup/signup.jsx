import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CgSpinnerTwo } from 'react-icons/cg'
import { toast } from 'react-toastify'
import { Footer } from '../../components/Footer/footer'
import FormInput from '../../components/FormInput/formInput'
import { Header } from '../../components/Header/header'
import { StyledLink, StyledLinkButton } from '../../components/styledLink/style'
import UniversalTitle from '../../components/UniversalTitle/title'
import {
  ButtonChoice,
  ContainerButtons,
} from '../../components/buttonChoice/style'
import {
  ButtonSubmit,
  ConfirmationTitle,
  ConfirmContainer,
  Container,
  FormBox,
  GoogleLogin,
  HandleForm,
  PageContainer,
  SubTitle,
  HandleSelect,
} from './style'
import formValidation from './validation'
import formValidationAccess from './validationAccess'
import { api } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const actualForm = isLogin ? formValidation : formValidationAccess

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(actualForm),
  })

  useEffect(() => {
    console.log(errors)
  }, [errors])

  function onSubmit(data) {
    setIsLoading(true)
    api
      .post('/public/register/users', {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        setSuccess(true)
        toast.success('Cadastrado com sucesso!')
      })
      .catch((err) => {
        setSuccess(false)
        toast.error('Algo de errado!')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <PageContainer>
        <Header />
        <Container>
          <HandleSelect>
            <ContainerButtons>
              <ButtonChoice
                className={isLogin ? 'clicked' : ''}
                onClick={() => {
                  setIsLogin(true)
                }}
              >
                Entrar
              </ButtonChoice>
              <ButtonChoice
                className={!isLogin ? 'clicked' : ''}
                onClick={() => {
                  setIsLogin(false)
                }}
              >
                Cadastrar
              </ButtonChoice>
            </ContainerButtons>
          </HandleSelect>
          <HandleForm>
            {!isLogin ? (
              <>
                {!success ? (
                  <FormBox>
                    <UniversalTitle color="#FFFFFF">
                      Faça seu cadastro
                    </UniversalTitle>
                    <SubTitle>
                      Bem-vindo ao portifólio de Gustavo Henrique Moreira
                    </SubTitle>
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
                      <StyledLink onClick={() => setIsLogin(true)}>
                        Já possui um cadastro?
                      </StyledLink>
                    </form>
                  </FormBox>
                ) : (
                  <ConfirmContainer>
                    <ConfirmationTitle>Confirme sua conta!</ConfirmationTitle>
                    <SubTitle>
                      Muito obrigado por cadastrar-se!. Confirme a criação da
                      sua conta clicando no botão enviando no seu e-mail e
                      continue usufruindo das funcionalidades do site.
                    </SubTitle>
                    <StyledLinkButton to="/">Voltar</StyledLinkButton>
                  </ConfirmContainer>
                )}
              </>
            ) : (
              <>
                {!success ? (
                  <FormBox>
                    <UniversalTitle color="#FFFFFF">
                      Acesse sua conta
                    </UniversalTitle>
                    <SubTitle>
                      Bem-vindo de volta! Ficamos felizes por estar aqui
                      novamente.
                    </SubTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormInput
                        type="text"
                        label="Usuário"
                        placeholder="Insira seu usuário ou e-mail"
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
                        {isLoading ? (
                          <CgSpinnerTwo className="icon" size={24} />
                        ) : (
                          'Entrar'
                        )}
                      </ButtonSubmit>
                      <GoogleLogin> Entrar com Google</GoogleLogin>
                      <StyledLink onClick={() => setIsLogin(false)}>
                        Não possui cadastro?
                      </StyledLink>
                    </form>
                  </FormBox>
                ) : (
                  <SubTitle>Muito obrigado</SubTitle>
                )}
              </>
            )}
          </HandleForm>
        </Container>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Signup
