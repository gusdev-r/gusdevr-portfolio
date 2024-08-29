import React, { useState } from 'react'
import logo from '../../assets/images/snug.png'
import {
  HeaderComp,
  LogoBox,
  Logo,
  ContainerElements,
  Element,
  ContainerButtons,
  Button,
} from './style'

export const HeaderHome = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleMouseEnter = () => {
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    setShowDropdown(false)
  }

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
      </ContainerElements>
      <ContainerButtons>
        <Button>Login</Button>
        <Button>Register</Button>
      </ContainerButtons>
    </HeaderComp>
  )
}
