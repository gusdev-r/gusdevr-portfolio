import React from 'react'
import logo from '../../../../assets/images/snug.png'
import { Link } from 'react-router-dom'
import {
  Button,
  ContainerButtons,
  ContainerElements,
  Element,
  HeaderComp,
  Logo,
  LogoBox,
} from './style'

export const HeaderHome = () => {
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
        <Button>
          Entrar
          <Link to="/login"></Link>
        </Button>
        <Button>
          Cadastrar
          <Link to="/register" />
        </Button>
      </ContainerButtons>
    </HeaderComp>
  )
}
