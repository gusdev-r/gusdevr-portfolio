import { useRef, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { IoClose, IoMenu } from 'react-icons/io5'
import logo from '../../assets/images/snug.png'
import { useHeaderVisibility } from '../../hooks/useHeader'
import {
  BtnMenu,
  Button,
  ContainerButtons,
  ContainerElements,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Element,
  ElementMenu,
  HeaderComp,
  HeaderMenu,
  Logo,
  LogoBox,
  MenuContainer,
} from './style'

export const Header = () => {
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
          <Element>Link 1</Element>
          <Element>Link 2</Element>
          <Dropdown>
            <Element role="button">Options</Element>
            <DropdownMenu>
              <DropdownItem href="#">Ação 1</DropdownItem>
              <DropdownItem href="#">Ação 2</DropdownItem>
              <DropdownItem href="#">Ação 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <ContainerButtons>
            <Button onClick={() => {}} bgColorHover="#dbdbdb">
              <FiLogIn style={{ marginLeft: '8px' }} />
              Login
            </Button>
          </ContainerButtons>
          <BtnMenu onClick={() => setIsOpen(true)}>
            <IoMenu />
          </BtnMenu>
        </ContainerElements>
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
          <ElementMenu>Link 1</ElementMenu>
          <ElementMenu>Link 2</ElementMenu>
          <ElementMenu>
            Login <FiLogIn style={{ marginLeft: '8px' }} />
          </ElementMenu>
          <Dropdown>
            <Element role="button">Options</Element>
            <DropdownMenu>
              <DropdownItem href="#">Ação 1</DropdownItem>
              <DropdownItem href="#">Ação 2</DropdownItem>
              <DropdownItem href="#">Ação 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuContainer>
      </HeaderMenu>
    </>
  )
}
