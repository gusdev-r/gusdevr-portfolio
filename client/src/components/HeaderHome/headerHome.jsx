import React from 'react'
import logo from '../../assets/images/snug.png'
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
        <Button>Login</Button>
        <Button>Register</Button>
      </ContainerButtons>
    </HeaderComp>
  )
}
