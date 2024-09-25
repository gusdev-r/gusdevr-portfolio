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
const KnowPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <TechSection>
            <KnowContainer>
              <StyledBigTitle>Principais Conhecimentos</StyledBigTitle>
              <InfoContainer>
                <StyledSmallSubTitle textAling="center" maxWidth="50rem">
                  Neste espaço, você encontrará uma coleção dos meus principais
                  conhecimentos em tecnologia. Com foco em linguagens como Java,
                  Python e JavaScript, e experiência em frameworks como React,
                  Django e Spring busco sempre aprimorar minhas habilidades.
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
                Conhecimento em Back-end
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
                Conhecimento em Front-end
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
                Conhecimento em Dev-Ops
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
                Experiência com metodologias
              </StyledMediumSubTitle>
              <StyledSmallSubTitle maxWidth="50rem">
                Minhas experiências com metodologias ágeis incluem a aplicação
                de SCRUM e Kanban no gerenciamento de projetos. Tenho trabalhado
                na criação de tarefas no backlog, detalhamento de histórias de
                usuário e categorização de atividades. Participo ativamente de
                Sprints, reuniões diárias e apresentações em reviews, sempre
                utilizando GitLab para manter a organização e a eficiência da
                equipe. Essa abordagem tem sido fundamental para otimizar
                processos e garantir a entrega contínua de resultados.
              </StyledSmallSubTitle>
            </div>
            {/* <div class/Name="svgConf"> */}
            <MdViewKanban />
            {/* </div> */}
          </ExperienceContainer>
        </MainContent>
      </PageContainer>
    </>
  )
}

export default KnowPage
