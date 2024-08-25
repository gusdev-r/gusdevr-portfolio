import { useEffect, useState, useRef } from 'react'
import logo from '../../assets/images/snug.png'
import {
  Button,
  ContainerButtons,
  ContainerElements,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Element,
  FormControl,
  FormInline,
  HeaderComp,
  Logo,
  LogoBox,
  BtnMenu,
  HeaderMenu,
  ElementMenu,
  MenuContainer,
} from './style'
import { FiLogIn } from 'react-icons/fi'
import { IoMenu, IoClose } from 'react-icons/io5'

export const Header = () => {
  const [searchContent, setSearchContent] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const handleSearch = () => {
    // logic to work with the search state if this is used by you
    // eslint-disable-next-line no-unused-expressions
    searchContent
  }

  const handleChange = (event) => {
    setSearchContent(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleControllHeader = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      const scrollDifference = scrollPosition - prevScrollPos
      if (scrollDifference > 0 && scrollPosition > 5.5 * 16) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setPrevScrollPos(scrollPosition)
    }

    window.addEventListener('scroll', handleControllHeader)

    return () => {
      window.removeEventListener('scroll', handleControllHeader)
    }
  }, [prevScrollPos])

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
