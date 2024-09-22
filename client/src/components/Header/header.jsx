import { useRef, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { IoClose, IoMenu } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/snug.png'
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
  return (
    <>
      <HeaderComp
        style={{
          transform: showHeader ? 'translateY(0)' : 'translateY(-60%)',
        }}
      >
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
        <BtnMenu onClick={() => setIsOpen(true)}>
          <IoMenu />
        </BtnMenu>
        <Button
          onClick={() => {
            navigate('/login')
          }}
          bgColorHover="#dbdbdb"
        >
          {' '}
          Entrar
          <FiLogIn style={{ marginLeft: '5px' }} />
        </Button>
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
          <Element href="#">Link One</Element>
          <Element href="#">Link Two</Element>
          <Element href="#">Link Three</Element>
          <Element href="#">Link Four</Element>
          <Element href="#">Link Five</Element>
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
