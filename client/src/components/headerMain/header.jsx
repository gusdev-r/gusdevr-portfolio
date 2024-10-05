import React, { useEffect, useRef, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/g-black-logo-removebg.png'
import { useHeaderVisibility } from '../../hooks/useHeader'
import { GiPlagueDoctorProfile, GiClassicalKnowledge } from 'react-icons/gi'
import { GrProjects } from 'react-icons/gr'
import { CgMediaPodcast } from 'react-icons/cg'
import {
  BtnMenu,
  ContainerElements,
  Element,
  HBtn,
  HeaderComp,
  HeaderMenu,
  Logo,
  LogoBox,
  MenuContainer,
} from './style'

const HElements = ({ isOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const main = {
    fontSize: '14px',
  }

  const menu = {
    fontSize: '1.2rem',
    margin: '0.5rem',
    textDecoration: 'underline',
  }

  return (
    <>
      <Element
        style={isOpen ? menu : main}
        className={location.pathname === '/' ? 'active' : ''}
        onClick={() => navigate('/')}
      >
        Sobre{' '}
        {isOpen && (
          <GiPlagueDoctorProfile
            style={{ fontSize: '1.8rem', marginLeft: '1rem' }}
          />
        )}
      </Element>
      <Element
        style={isOpen ? menu : main}
        className={location.pathname === '/projects' ? 'active' : ''}
        onClick={() => navigate('/projects')}
      >
        Projetos{' '}
        {isOpen && (
          <GiClassicalKnowledge
            style={{ fontSize: '1.8rem', marginLeft: '1rem' }}
          />
        )}
      </Element>
      <Element
        style={isOpen ? menu : main}
        className={location.pathname === '/knowledges' ? 'active' : ''}
        onClick={() => navigate('/knowledges')}
      >
        Conhecimentos{' '}
        {isOpen && (
          <GrProjects style={{ fontSize: '1.8rem', marginLeft: '1rem' }} />
        )}
      </Element>
      <Element
        style={isOpen ? menu : main}
        className={location.pathname === '/social' ? 'active' : ''}
        onClick={() => navigate('/social')}
      >
        Redes sociais{' '}
        {isOpen && (
          <CgMediaPodcast style={{ fontSize: '1.8rem', marginLeft: '1rem' }} />
        )}
      </Element>
    </>
  )
}

export const HeaderAbout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const showHeader = useHeaderVisibility()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <>
      <HeaderComp
        style={{ transform: showHeader ? 'translateY(0)' : 'translateY(-60%)' }}
      >
        <LogoBox>
          <Logo src={logo} alt="logo" />
        </LogoBox>
        <ContainerElements>
          <HElements fontSize="2rem" isOpen={isOpen} />{' '}
        </ContainerElements>
        <HBtn>
          <BtnMenu onClick={() => setIsOpen(true)}>
            <IoMenu />
          </BtnMenu>
        </HBtn>
      </HeaderComp>
      <HeaderMenu
        ref={ref}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <BtnMenu onClick={() => setIsOpen(false)}>
          <IoClose />
        </BtnMenu>
        <MenuContainer>
          <HElements isOpen={isOpen} />
        </MenuContainer>
      </HeaderMenu>
    </>
  )
}
