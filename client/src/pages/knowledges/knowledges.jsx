import { AiOutlineLinux } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiPython } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { MdViewKanban } from "react-icons/md";
import {
  SiDjango,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGrafana,
  SiHibernate,
  SiKeycloak,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiRabbitmq,
  SiSonarqube,
  SiSpring,
  SiSpringsecurity,
  SiSwagger,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Footer } from "../../components/Footer/footer";
import { HeaderAbout } from "../../components/headerMain/header";
import { StyledSmallSubTitle } from "../../components/mainTexts/descText/desc";
import { StyledMediumSubTitle } from "../../components/mainTexts/mediumBoldText/medium";
import { StyledBigTitle } from "../../components/mainTexts/titleBoldText/title";
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
} from "./style";

const KnowPage = () => {
  return (
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
                conhecimentos em tecnologia. Com foco em linguagens como{" "}
                <span style={{ color: "var(--grey6)" }}>
                  Java, Python e JavaScript, e experiência em frameworks como
                  React, Django e Spring
                </span>{" "}
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
          {/* Back-end Section */}
          <TechContainer>
            <StyledMediumSubTitle textAlign="center" margin="2rem">
              <span style={{ color: "var(--grey7)" }}>
                Conhecimento em Back-end
              </span>
            </StyledMediumSubTitle>
            <IconsGrid>
              {/* Linguagens */}
              <IconItem>
                <FaJava size={40} />
                <IconLabel>Java</IconLabel>
              </IconItem>
              <IconItem>
                <DiPython size={40} />
                <IconLabel>Python</IconLabel>
              </IconItem>
              <IconItem>
                <FaNodeJs size={40} />
                <IconLabel>Node.js</IconLabel>
              </IconItem>

              {/* Frameworks Java */}
              <IconItem>
                <SiSpring size={40} />
                <IconLabel>Spring Boot</IconLabel>
              </IconItem>
              <IconItem>
                <SiSpringsecurity size={40} />
                <IconLabel>Spring Security</IconLabel>
              </IconItem>
              <IconItem>
                <SiHibernate size={40} />
                <IconLabel>Hibernate</IconLabel>
              </IconItem>

              {/* Frameworks Python */}
              <IconItem>
                <SiDjango size={40} />
                <IconLabel>Django</IconLabel>
              </IconItem>
              <IconItem>
                <SiFlask size={40} />
                <IconLabel>Flask</IconLabel>
              </IconItem>

              {/* Node.js Frameworks */}
              <IconItem>
                <SiExpress size={40} />
                <IconLabel>Express</IconLabel>
              </IconItem>

              {/* Bancos de dados */}
              <IconItem>
                <BiLogoPostgresql size={40} />
                <IconLabel>PostgreSQL</IconLabel>
              </IconItem>
              <IconItem>
                <SiMysql size={40} />
                <IconLabel>MySQL</IconLabel>
              </IconItem>
              <IconItem>
                <SiMongodb size={40} />
                <IconLabel>MongoDB</IconLabel>
              </IconItem>
            </IconsGrid>
          </TechContainer>

          {/* Front-end Section */}
          <TechContainer>
            <StyledMediumSubTitle textAlign="center" margin="2rem">
              <span style={{ color: "var(--grey7)" }}>
                Conhecimento em Front-end
              </span>
            </StyledMediumSubTitle>
            <IconsGrid>
              <IconItem>
                <FaJs size={40} />
                <IconLabel>JavaScript</IconLabel>
              </IconItem>
              <IconItem>
                <SiTypescript size={40} />
                <IconLabel>TypeScript</IconLabel>
              </IconItem>
              <IconItem>
                <FaReact size={40} />
                <IconLabel>React</IconLabel>
              </IconItem>
              <IconItem>
                <SiVite size={40} />
                <IconLabel>Vite</IconLabel>
              </IconItem>
            </IconsGrid>
          </TechContainer>

          {/* DevOps Section */}
          <TechContainer>
            <StyledMediumSubTitle textAlign="center" margin="2rem">
              <span style={{ color: "var(--grey7)" }}>DevOps & Cloud</span>
            </StyledMediumSubTitle>
            <IconsGrid>
              <IconItem>
                <FaDocker size={40} />
                <IconLabel>Docker</IconLabel>
              </IconItem>
              <IconItem>
                <FaGitAlt size={40} />
                <IconLabel>Git</IconLabel>
              </IconItem>
              <IconItem>
                <FaGithub size={40} />
                <IconLabel>GitHub</IconLabel>
              </IconItem>
              <IconItem>
                <FaGitlab size={40} />
                <IconLabel>GitLab</IconLabel>
              </IconItem>
              <IconItem>
                <SiRabbitmq size={40} />
                <IconLabel>RabbitMQ</IconLabel>
              </IconItem>
              <IconItem>
                <SiSonarqube size={40} />
                <IconLabel>SonarQube</IconLabel>
              </IconItem>
              <IconItem>
                <FaAws size={40} />
                <IconLabel>AWS</IconLabel>
              </IconItem>
              <IconItem>
                <SiNginx size={40} />
                <IconLabel>Nginx</IconLabel>
              </IconItem>
              <IconItem>
                <AiOutlineLinux />
                <IconLabel>Linux</IconLabel>
              </IconItem>
            </IconsGrid>
          </TechContainer>

          {/* Ferramentas Section */}
          <TechContainer>
            <StyledMediumSubTitle textAlign="center" margin="2rem">
              <span style={{ color: "var(--grey7)" }}>Ferramentas</span>
            </StyledMediumSubTitle>
            <IconsGrid>
              <IconItem>
                <SiSwagger size={40} />
                <IconLabel>Swagger</IconLabel>
              </IconItem>
              <IconItem>
                <SiKeycloak size={40} />
                <IconLabel>Keycloak</IconLabel>
              </IconItem>
              <IconItem>
                <SiGrafana size={40} />
                <IconLabel>Grafana</IconLabel>
              </IconItem>
              <IconItem>
                <SiFigma size={40} />
                <IconLabel>Figma</IconLabel>
              </IconItem>
            </IconsGrid>
          </TechContainer>
        </TechSection>
        <ExperienceContainer>
          <div>
            <StyledMediumSubTitle fontSize="2rem">
              <span style={{ color: "var(--grey6)" }}>
                Experiência com metodologias
              </span>
            </StyledMediumSubTitle>
            <StyledSmallSubTitle maxWidth="40rem">
              Minhas experiências com metodologias ágeis incluem a aplicação de{" "}
              <span style={{ color: "var(--grey6)" }}>SCRUM e Kanban</span> no
              gerenciamento de projetos. Tenho trabalhado na criação de tarefas
              no backlog, detalhamento de histórias de usuário e categorização
              de atividades.{" "}
              <span style={{ color: "var(--grey6)" }}>
                Participo ativamente de Sprints, reuniões diárias e
                apresentações em reviews,
              </span>{" "}
              sempre utilizando GitLab para manter a organização e a eficiência
              da equipe. Essa abordagem tem sido fundamental para otimizar
              processos e garantir a entrega contínua de resultados.
            </StyledSmallSubTitle>
          </div>
          <MdViewKanban />
        </ExperienceContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default KnowPage;
