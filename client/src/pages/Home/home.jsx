import { HeaderHome } from './components/headerHome/headerHome'
import { Carousel } from './components/Carousel/carousel'
import { ButtonGroup } from './components/Buttons/buttons'
import { Footer } from '../../components/Footer/footer'
import defaultImg from '../../assets/images/grey.png'

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa'

import { SiSpring } from 'react-icons/si'

import { MdEmail, MdChat, MdPhone } from 'react-icons/md'

import {
  PageContainer,
  MainContent,
  WelcomeSection,
  WelcomeContainer,
  InfoContainer,
  TechSection,
  TechContainer,
  IconsGrid,
  IconItem,
  IconLabel,
  DescribeSection,
  DescribeContainer,
  DescribeImg,
  ContactSection,
  ContactContainer,
  ContactBox,
  IconContact,
  ContactLink,
  StyledBigTitle,
  StyledMediumSubTitle,
  StyledSmallSubTitle,
  StyledMediumTitle,
  StyledSmallTitle,
} from './style'

import { useEffect } from 'react'
import { testUseCase } from '../../usecases/testUseCase'
import { toast } from 'react-toastify'

const Home = () => {
  useEffect(() => {
    const fetchHelloTest = async () => {
      try {
        const response = await testUseCase()
        console.log(response)
      } catch (error) {
        toast.error('Algo deu errado!')
        console.log('error', error)
      }
    }
    fetchHelloTest()
  }, [])

  return (
    <>
      <PageContainer>
        <HeaderHome />

        <MainContent>
          <Carousel />
          <WelcomeSection>
            <WelcomeContainer>
              <StyledBigTitle>Welcome To Snug</StyledBigTitle>
              <InfoContainer>
                <StyledSmallSubTitle maxWidth="600px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmo.
                </StyledSmallSubTitle>
                <ButtonGroup></ButtonGroup>
              </InfoContainer>
            </WelcomeContainer>
          </WelcomeSection>

          <TechSection>
            <TechContainer>
              <StyledMediumSubTitle>
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore
                adipiscing elit.
              </StyledMediumSubTitle>
              <IconsGrid>
                <IconItem>
                  <FaReact />
                  <IconLabel>React</IconLabel>
                </IconItem>
                <IconItem>
                  <FaJs />
                  <IconLabel>JavaScript</IconLabel>
                </IconItem>
                <IconItem>
                  <FaHtml5 />
                  <IconLabel>HTML5</IconLabel>
                </IconItem>
                <IconItem>
                  <FaCss3Alt />
                  <IconLabel>CSS3</IconLabel>
                </IconItem>
                <IconItem>
                  <FaJava />
                  <IconLabel>Java</IconLabel>
                </IconItem>
                <IconItem>
                  <SiSpring />
                  <IconLabel>Spring</IconLabel>
                </IconItem>
                <IconItem>
                  <FaNodeJs />
                  <IconLabel>Node.js</IconLabel>
                </IconItem>
                <IconItem>
                  <FaGitAlt />
                  <IconLabel>Git</IconLabel>
                </IconItem>
                <IconItem>
                  <FaGithub />
                  <IconLabel>GitHub</IconLabel>
                </IconItem>
              </IconsGrid>
            </TechContainer>
          </TechSection>

          <DescribeSection>
            <DescribeImg src={defaultImg} alt="img" />
            <DescribeContainer>
              <StyledMediumTitle>
                Describe benefit of feature one
              </StyledMediumTitle>
              <StyledSmallSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </StyledSmallSubTitle>
              <ButtonGroup></ButtonGroup>
            </DescribeContainer>
          </DescribeSection>

          <ContactSection>
            <ContactContainer>
              <ContactBox>
                <IconContact>
                  <MdEmail />
                </IconContact>
                <StyledSmallTitle>Email</StyledSmallTitle>
                <StyledSmallSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </StyledSmallSubTitle>
                <ContactLink href="">loremipsum@gmail.com</ContactLink>
              </ContactBox>
              <ContactBox>
                <IconContact>
                  <MdChat />
                </IconContact>
                <StyledSmallTitle>Live Chat</StyledSmallTitle>
                <StyledSmallSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </StyledSmallSubTitle>
                <ContactLink href="">Lorem ipsum dolor sit</ContactLink>
              </ContactBox>
              <ContactBox>
                <IconContact>
                  <MdPhone />
                </IconContact>
                <StyledSmallTitle>Phone</StyledSmallTitle>
                <StyledSmallSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </StyledSmallSubTitle>
                <ContactLink href="">+1 (555) 000-0000</ContactLink>
              </ContactBox>
            </ContactContainer>
          </ContactSection>
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
