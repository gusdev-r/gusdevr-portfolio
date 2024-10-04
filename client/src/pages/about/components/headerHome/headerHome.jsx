import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../../../assets/images/g-black-logo-removebg.png'
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
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  })

  return (
    <HeaderComp>
      <LogoBox>
        <Logo src={logo} alt="logo" />
      </LogoBox>
      <ContainerElements>
        <Element
          className={location.pathname === '/' ? 'active' : ''}
          onClick={() => {
            navigate('/')
          }}
        >
          Home
        </Element>
        <Element
          className={location.pathname === '/projects' ? 'active' : ''}
          onClick={() => {
            navigate('/projects')
          }}
        >
          Projetos
        </Element>
        <Element
          className={location.pathname === '/knowledges' ? 'active' : ''}
          onClick={() => navigate('/knowledges')}
        >
          Conhecimentos
        </Element>
        <Element
          className={location.pathname === '/social' ? 'active' : ''}
          onClick={() => {
            navigate('/social')
          }}
        >
          Redes sociais
        </Element>
      </ContainerElements>
    </HeaderComp>
  )
}
