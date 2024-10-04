import { AiFillGithub } from 'react-icons/ai'
import { DiPython } from 'react-icons/di'
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { MdViewKanban } from 'react-icons/md'
import {
  SiDjango,
  SiDocker,
  SiFlask,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiSpring,
  SiSpringsecurity,
} from 'react-icons/si'
import { TbBrandVite } from 'react-icons/tb'
import { Footer } from '../../components/Footer/footer'
import { HeaderAbout } from '../../components/headerMain/header'
import {
  Buttons,
  ContainerButtons,
  ExperienceContainer,
  IconItem,
  IconLabel,
  IconsGrid,
  InfoContainer,
  KnowContainer,
  MainContent,
  PageContainer,
  TechContainer,
  TechSection,
} from './style'
import { StyledSmallSubTitle } from '../../components/mainTexts/descText/desc'
import { StyledBigTitle } from '../../components/mainTexts/titleBoldText/title'
import { StyledMediumSubTitle } from '../../components/mainTexts/mediumBoldText/medium'
const KnowPage = () => {
  return (
    <>
      <PageContainer>
        <HeaderAbout />
        <MainContent>
          <TechSection>
            <KnowContainer>
              <InfoContainer>
                <StyledBigTitle textAlign="center">
                  Principais Conhecimentos
                </StyledBigTitle>
                <StyledSmallSubTitle textAlign="center" maxWidth="70%">
                  Neste espaço, você encontrará uma coleção dos meus principais
                  conhecimentos em tecnologia. Com foco em linguagens como{' '}
                  <span style={{ color: 'var(--grey6)' }}>
                    Java, Python e JavaScript, e experiência em frameworks como
                    React, Django e Spring
                  </span>{' '}
                  busco sempre aprimorar minhas habilidades.
                </StyledSmallSubTitle>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gusdev-r/"
                  rel="noopener noreferrer"
                >
                  <ContainerButtons justifyContent="center">
                    <Buttons className="projects">
                      Perfil com todos os conhecimentos e experiências
                    </Buttons>
                  </ContainerButtons>
                </a>
              </InfoContainer>
            </KnowContainer>
            <TechContainer>
              <StyledMediumSubTitle textAlign="center" margin="2rem">
                <span style={{ color: 'var(--grey7)' }}>
                  Conhecimento em Back-end
                </span>
              </StyledMediumSubTitle>
              <IconsGrid>
                <IconItem>
                  <FaJava />
                  <IconLabel>Java</IconLabel>
                </IconItem>
                <IconItem>
                  <SiSpring />
                  <IconLabel>Spring</IconLabel>
                </IconItem>
                <IconItem>
                  <SiSpringsecurity />
                  <IconLabel>Spring security</IconLabel>
                </IconItem>
                <IconItem>
                  <DiPython />
                  <IconLabel>Python</IconLabel>
                </IconItem>
                <IconItem>
                  <SiDjango />
                  <IconLabel>Django</IconLabel>
                </IconItem>
                <IconItem>
                  <SiFlask />
                  <IconLabel>Flask</IconLabel>
                </IconItem>
                <IconItem>
                  <SiPostgresql />
                  <IconLabel>PostgreSQL</IconLabel>
                </IconItem>
                <IconItem>
                  <SiMysql />
                  <IconLabel>MySQL</IconLabel>
                </IconItem>
                <IconItem>
                  <SiMongodb />
                  <IconLabel>MongoDB</IconLabel>
                </IconItem>
              </IconsGrid>
            </TechContainer>
          </TechSection>

          <TechSection>
            <TechContainer>
              <StyledMediumSubTitle textAlign="center" margin="2rem">
                <span style={{ color: 'var(--grey7)' }}>
                  Conhecimento em Front-end
                </span>
              </StyledMediumSubTitle>
              <IconsGrid>
                <IconItem>
                  <FaHtml5 />
                  <IconLabel>HTML5</IconLabel>
                </IconItem>
                <IconItem>
                  <FaCss3Alt />
                  <IconLabel>CSS3</IconLabel>
                </IconItem>
                <IconItem>
                  <FaJs />
                  <IconLabel>JavaScript</IconLabel>
                </IconItem>
                <IconItem>
                  <FaNodeJs />
                  <IconLabel>Node.js</IconLabel>
                </IconItem>
                <IconItem>
                  <FaReact />
                  <IconLabel>React</IconLabel>
                </IconItem>
                <IconItem>
                  <TbBrandVite />
                  <IconLabel>Vite</IconLabel>
                </IconItem>
              </IconsGrid>
            </TechContainer>
          </TechSection>

          <TechSection>
            <TechContainer>
              <StyledMediumSubTitle textAlign="center" margin="2rem">
                <span style={{ color: 'var(--grey7)' }}>
                  Conhecimento em Dev-Ops
                </span>
              </StyledMediumSubTitle>
              <IconsGrid>
                <IconItem>
                  <SiDocker />
                  <IconLabel>Docker</IconLabel>
                </IconItem>
                <IconItem>
                  <SiKubernetes />
                  <IconLabel>Kubernetes</IconLabel>
                </IconItem>
                <IconItem>
                  <SiJenkins />
                  <IconLabel>Jenkins</IconLabel>
                </IconItem>
                <IconItem>
                  <SiNginx />
                  <IconLabel>Nginx</IconLabel>
                </IconItem>
                <IconItem>
                  <SiRedis />
                  <IconLabel>Redis</IconLabel>
                </IconItem>
                <IconItem>
                  <SiRabbitmq />
                  <IconLabel>RabbitMQ</IconLabel>
                </IconItem>
                <IconItem>
                  <FaGitAlt />
                  <IconLabel>Git</IconLabel>
                </IconItem>
                <IconItem>
                  <AiFillGithub />
                  <IconLabel>GitHub</IconLabel>
                </IconItem>
              </IconsGrid>
            </TechContainer>
          </TechSection>
          <ExperienceContainer>
            <div>
              <StyledMediumSubTitle fontSize="2rem">
                <span style={{ color: 'var(--grey6)' }}>
                  Experiência com metodologias
                </span>
              </StyledMediumSubTitle>
              <StyledSmallSubTitle maxWidth="40rem">
                Minhas experiências com metodologias ágeis incluem a aplicação
                de <span style={{ color: 'var(--grey6)' }}>SCRUM e Kanban</span>{' '}
                no gerenciamento de projetos. Tenho trabalhado na criação de
                tarefas no backlog, detalhamento de histórias de usuário e
                categorização de atividades.{' '}
                <span style={{ color: 'var(--grey6)' }}>
                  Participo ativamente de Sprints, reuniões diárias e
                  apresentações em reviews,
                </span>{' '}
                sempre utilizando GitLab para manter a organização e a
                eficiência da equipe. Essa abordagem tem sido fundamental para
                otimizar processos e garantir a entrega contínua de resultados.
              </StyledSmallSubTitle>
            </div>
            <MdViewKanban />
          </ExperienceContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default KnowPage
