import { AiFillGithub } from 'react-icons/ai'
import { DiPython } from 'react-icons/di'
import { HeaderHome } from '../about/components/headerHome/headerHome'
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
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
import { MdViewKanban } from 'react-icons/md'
import { TbBrandVite } from 'react-icons/tb'
import {
  Buttons,
  ContainerButtons,
  IconItem,
  IconLabel,
  IconsGrid,
  InfoContainer,
  MainContent,
  PageContainer,
  StyledBigTitle,
  StyledMediumSubTitle,
  StyledSmallSubTitle,
  TechContainer,
  TechSection,
  KnowContainer,
  ExperienceContainer,
} from './style'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/footer'
const KnowPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <TechSection>
            <KnowContainer>
              <InfoContainer>
                <StyledBigTitle textAling="center">
                  Principais Conhecimentos
                </StyledBigTitle>
                <StyledSmallSubTitle textAling="center">
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
              <StyledMediumSubTitle margin="2rem">
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
              <StyledMediumSubTitle margin="2rem">
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
              <StyledMediumSubTitle margin="2rem">
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
              <StyledSmallSubTitle>
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
