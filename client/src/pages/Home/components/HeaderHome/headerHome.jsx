import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/images/snug.png'
import {
  ButtonChoice,
  ContainerButtons,
  ContainerElements,
  Element,
  HeaderComp,
  Logo,
  LogoBox,
} from './style'

export const HeaderHome = () => {
  const navigate = useNavigate()

  return (
    <HeaderComp>
      <LogoBox>
        <Logo src={logo} alt="logo" />
      </LogoBox>
      <ContainerElements>
        <Element href="#">Link One</Element>
        <Element href="#">Link Two</Element>
        <Element href="#">Link Three</Element>
        <Element href="#">Link Four</Element>
        <Element href="#">Link Five</Element>
      </ContainerElements>
      <ContainerButtons>
        <ButtonChoice
          onClick={() => {
            navigate('/login')
          }}
        >
          Entrar
        </ButtonChoice>
        <ButtonChoice
          onClick={() => {
            navigate('/register')
          }}
        >
          Cadastrar
        </ButtonChoice>
      </ContainerButtons>
    </HeaderComp>
  )
}
