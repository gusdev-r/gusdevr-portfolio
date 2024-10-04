import { useRef, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { IoClose, IoMenu } from 'react-icons/io5'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/images/g-black-logo-removebg.png'
import { useHeaderVisibility } from '../../hooks/useHeader'
import {
  BtnMenu,
  Button,
  ContainerElements,
  Element,
  HeaderComp,
  HeaderMenu,
  Logo,
  LogoBox,
  MenuContainer,
} from './style'

export const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const showHeader = useHeaderVisibility()
  const location = useLocation()

  return (
    <>
      <HeaderComp
        style={{
          transform: showHeader ? 'translateY(0)' : 'translateY(-50%)',
        }}
      >
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
        <BtnMenu onClick={() => setIsOpen(true)}>
          <IoMenu />
        </BtnMenu>
      </HeaderComp>
      <HeaderMenu
        ref={ref}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <BtnMenu onClick={() => setIsOpen(false)}>
          {' '}
          <IoClose />
        </BtnMenu>
        <MenuContainer>
          <Element
            onClick={() => {
              navigate('/')
            }}
          >
            Home
          </Element>
        </MenuContainer>
        <Element
          onClick={() => {
            navigate('/login')
          }}
        >
          Entrar <FiLogIn style={{ marginLeft: '8px' }} />
        </Element>
      </HeaderMenu>
    </>
  )
}
