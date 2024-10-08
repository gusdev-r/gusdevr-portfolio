import { FaInstagram } from 'react-icons/fa'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Footer } from '../../components/Footer/footer'
import { HeaderAbout } from '../../components/headerMain/header'
import {
  ExperienceContainer,
  InfoContainer,
  MainContent,
  PageContainer,
  TechSection,
} from './style'
import { StyledSmallSubTitle } from '../../components/mainTexts/descText/desc'
import { StyledBigTitle } from '../../components/mainTexts/titleBoldText/title'
import { StyledMediumSubTitle } from '../../components/mainTexts/mediumBoldText/medium'

const Social = () => {
  return (
    <>
      <PageContainer>
        <HeaderAbout />
        <MainContent>
          <TechSection>
            <InfoContainer>
              <StyledBigTitle maxWidth="90%" textAlign="center">
                Redes sociais conteúdos
              </StyledBigTitle>
              <StyledSmallSubTitle maxWidth="70rem" textAlign="center">
                Bem-vindo à sessão de Redes Sociais e Comunidade! Aqui, você vai
                descobrir como me conecto com outros desenvolvedores e
                compartilho minha jornada.{' '}
                <span style={{ color: 'var(--grey6)' }}>
                  No Instagram, trago dicas, memes e insights sobre programação,
                </span>{' '}
                criando um espaço divertido para todos.
              </StyledSmallSubTitle>
              <div className="contSocial">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gusdev-r/"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gusdev-r/"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gusdev-r/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gusdev-r/"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </a>
              </div>
            </InfoContainer>
          </TechSection>
          <div className="infoSocial">
            <ExperienceContainer
              onClick={() => {
                window.open('https://www.instagram.com/gusdev_r/', '_blank')
              }}
            >
              <div className="handleMessage">
                <StyledMediumSubTitle fontSize="2rem">
                  <span style={{ color: 'var(--grey6)' }}>Entretenimento</span>
                </StyledMediumSubTitle>
                <StyledSmallSubTitle width="85%">
                  No Instagram, utilizo a plataforma para mesclar entretenimento
                  e aprendizado, postando dicas rápidas, memes sobre o dia a dia
                  da programação e desafios que enfrento. Essa abordagem leve
                  ajuda a conectar com outros desenvolvedores, sejam novatos ou
                  experientes, tornando o processo de aprendizado mais
                  divertido.
                </StyledSmallSubTitle>
              </div>
              <FaInstagram />
            </ExperienceContainer>
            <ExperienceContainer
              onClick={() => {
                window.open('https://discord.gg/NHAYF9EryF', '_blank')
              }}
            >
              <div className="handleMessage">
                <StyledMediumSubTitle fontSize="2rem">
                  <span style={{ color: 'var(--grey6)' }}>Comunidade</span>
                </StyledMediumSubTitle>
                <StyledSmallSubTitle width="88%">
                  Na comunidade "Coffee with Code" no Discord, que criei com o
                  objetivo de unir desenvolvedores, encontro um espaço valioso
                  para interagir com outros profissionais. Aqui, tiro dúvidas,
                  compartilho projetos e participo de discussões. Essa troca de
                  experiências fortalece nossa rede de suporte e crescimento.
                  divertido.
                </StyledSmallSubTitle>
              </div>
              <FaDiscord />
            </ExperienceContainer>
            <ExperienceContainer
              onClick={() => {
                window.open('https://www.linkedin.com/in/gusdev-r/', '_blank')
              }}
            >
              <div className="handleMessage">
                <StyledMediumSubTitle fontSize="2rem">
                  <span style={{ color: 'var(--grey6)' }}>Linkedin</span>
                </StyledMediumSubTitle>
                <StyledSmallSubTitle width="88%">
                  No LinkedIn, mantenho meu perfil sempre atualizado com minhas
                  novidades e conquistas profissionais. Compartilho atualizações
                  sobre projetos em que estou trabalhando e novas habilidades
                  que adquiri. Ao mostrar minha trajetória, espero inspirar
                  outros e fortalecer minha presença na comunidade de
                  desenvolvimento. divertido.
                </StyledSmallSubTitle>
              </div>
              <FaLinkedin />
            </ExperienceContainer>
            <ExperienceContainer
              onClick={() => {
                window.open('https://github.com/gusdev-r', '_blank')
              }}
            >
              <div className="handleMessage">
                <StyledMediumSubTitle fontSize="2rem">
                  <span style={{ color: 'var(--grey6)' }}>Projetos</span>
                </StyledMediumSubTitle>
                <StyledSmallSubTitle width="88%">
                  Aqui, compartilho meu código, inovações e soluções que
                  desenvolvi, permitindo que outros vejam meu estilo de trabalho
                  e aprendam comigo. Ao mostrar minha trajetória através dos
                  projetos, espero inspirar e colaborar com a comunidade de
                  desenvolvimento, tornando nosso ambiente ainda mais rico e
                  divertido.
                </StyledSmallSubTitle>
              </div>
              <FaGithub />
            </ExperienceContainer>
          </div>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Social
