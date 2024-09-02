import { HeaderHome } from './components/HeaderHome/headerHome'
import { Carousel } from './components/Carousel/carousel'
import { Footer } from '../../components/Footer/footer'
import defaultImg from '../../assets/images/grey.png'
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPhoneAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiSpring, SiMysql } from 'react-icons/si'
import { MdOutlineMail, MdChat } from 'react-icons/md'
import {
  PageContainer,
  MainContent,
  WelcomeSection,
  TitleContainer,
  Title,
  TitleDesc,
  SubTitleTech,
  WelcomeContainer,
  InfoContainer,
  ButtonNow,
  ContainerButtons,
  DescribeSection,
  DescribeContainer,
  DescribeImg,
  TechSection,
  TechContainer,
  IconContainer,
  ContactSection,
  ContactContainer,
  BoxContact,
  ContactLink,
  IconContact,
  ContactTitle,
} from './style'

const Home = () => {
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <Carousel />
          <WelcomeSection>
            <WelcomeContainer>
              <TitleContainer>
                <Title>Welcome To Snug</Title>
              </TitleContainer>
              <InfoContainer>
                <TitleDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmo.
                </TitleDesc>
                <ContainerButtons>
                  <ButtonNow>Book Now</ButtonNow>
                  <ButtonNow>View Menu</ButtonNow>
                </ContainerButtons>
              </InfoContainer>
            </WelcomeContainer>
          </WelcomeSection>

          <TechSection>
            <TechContainer>
              <SubTitleTech>
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore
                adipiscing elit.
              </SubTitleTech>
              <IconContainer>
                <FaJs />
                <FaReact />
                <FaNodeJs />
                <FaCss3Alt />
                <FaHtml5 />
                <FaJava />
                <SiSpring />
                <FaDocker />
                <FaAws />
                <FaGitAlt />
                <FaGithub />
                <SiMysql />
              </IconContainer>
            </TechContainer>
          </TechSection>

          <DescribeSection>
            <DescribeImg src={defaultImg} alt="img" />
            <DescribeContainer>
              <TitleDesc>Feature one</TitleDesc>
              <Title>Describe benefit of feature one</Title>
              <TitleDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </TitleDesc>
              <ContainerButtons>
                <ButtonNow>Learn more</ButtonNow>
              </ContainerButtons>
            </DescribeContainer>
          </DescribeSection>

          <ContactSection>
            <ContactContainer>
              <BoxContact>
                <IconContact>
                  <MdOutlineMail size={48} />
                </IconContact>
                <ContactTitle>Email</ContactTitle>
                <SubTitleTech>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SubTitleTech>
                <ContactLink href="g.hen.moreira@gmail.com"></ContactLink>
              </BoxContact>
              <BoxContact>
                <IconContact>
                  <MdChat size={48} />
                </IconContact>
                <ContactTitle>Live Chat</ContactTitle>
                <SubTitleTech>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SubTitleTech>
                <ContactLink href="tel:+155500000000">
                  +1 (555) 000-0000
                </ContactLink>
              </BoxContact>
              <BoxContact>
                <IconContact>
                  <FaPhoneAlt size={48} />
                </IconContact>
                <ContactTitle>Phone</ContactTitle>
                <SubTitleTech>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SubTitleTech>
                <ContactLink href="https://maps.google.com/?q=123+Sample+St,+Sydney+NSW+2000+AU">
                  123 Sample St, Sydney NSW 2000 AU
                </ContactLink>
              </BoxContact>
            </ContactContainer>
          </ContactSection>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
