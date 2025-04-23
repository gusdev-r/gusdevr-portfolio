import { FaCss3, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiSpring,
  SiSpringsecurity,
} from "react-icons/si";
import { Footer } from "../../components/Footer/footer";
import { HeaderAbout } from "../../components/headerMain/header";
import {
  InfoContainer,
  MainContent,
  PageContainer,
  ProjContainer,
  TechSection,
} from "./style";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { LiaJava } from "react-icons/lia";
import { RiJavascriptFill } from "react-icons/ri";
import { SiElasticsearch, SiExpress, SiGrafana } from "react-icons/si";
import { TbBrandGraphql, TbBrandVite } from "react-icons/tb";
import { StyledSmallSubTitle } from "../../components/mainTexts/descText/desc";
import { StyledBigTitle } from "../../components/mainTexts/titleBoldText/title";
import GeneralBoxProject from "./components/projectBox/box";

const Projects = () => {
  return (
    <PageContainer>
      <HeaderAbout />
      <MainContent>
        <TechSection>
          <InfoContainer>
            <StyledBigTitle textAlign="center">
              Projetos de atuação
            </StyledBigTitle>
            <StyledSmallSubTitle textAlign="center">
              Bem-vindo à{" "}
              <span style={{ color: "var(--grey6)" }}>sessão de Projetos!</span>{" "}
              Aqui, você encontrará uma seleção dos meus trabalhos mais
              empolgantes.{" "}
              <span style={{ color: "var(--grey6)" }}>
                Cada projeto reflete minha paixão pela programação e meu desejo
                de impactar positivamente a comunidade.
              </span>{" "}
              Explore e descubra como cada criação faz parte da minha jornada!
            </StyledSmallSubTitle>
          </InfoContainer>
        </TechSection>
        <ProjContainer>
          <GeneralBoxProject
            title={"Sistema de administração de estacionamento"}
            subtitle={
              "O projeto envolve a marcação de vagas de um estacionamento \n" +
              "para com os moradores que ocupam essas vagas.\n" +
              " Possui cadastro e login com autenticação.\n" +
              "Construído com Java, Spring Boot, Spring Sec, Spring JPA, etc."
            }
            sideTitle={"Projeto no Github"}
            sideSubtile={
              "Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!"
            }
            i1={<FaJava />}
            i2={<SiSpring />}
            i3={<SiSpringsecurity />}
            i4={<SiMysql />}
            projectLink={"https://github.com/gusdev-r/parking-administration"}
          />
          <GeneralBoxProject
            title={"Sandbox (Grupo NTSec)"}
            subtitle={
              "Projeto de análise estática de arquivos maliciosos para Analistas de Cyber segurança " +
              "com emulação consumindo API da Checkpoint e enriquecimento de artefatos do arquivo com API do Intel Sphere." +
              "Também, integrado com sistema de Feedback integrado a APi do Gitlab."
            }
            i1={<FaNodeJs />}
            i2={<SiExpress />}
            i3={<BiLogoPostgresql />}
            i4={<FaReact />}
            i5={<TbBrandVite />}
            i6={<SiElasticsearch />}
          />
          <GeneralBoxProject
            title={"MaturIT (Grupo NTSec)"}
            subtitle={
              "Projeto de avaliação de maturidade de risco para clientes corporativos, mapeando lacunas, riscos e coberturas técnicas" +
              "com identificação de oportunidades de negócio e possíveis produtos relacionados."
            }
            i1={<SiDjango />}
            i2={<FaPython />}
            i3={<BiLogoPostgresql />}
            i4={<FaReact />}
            i5={<TbBrandVite />}
          />
          <GeneralBoxProject
            title={"Sales Qualification (Grupo NTSec)"}
            subtitle={
              "Plataforma de qualificação de leads com foco em otimização da" +
              "gestão de oportunidades, utilizando frontend em React com Vite e" +
              "backend em Node.js com Express."
            }
            i1={<FaNodeJs />}
            i2={<SiExpress />}
            i3={<BiLogoPostgresql />}
            i4={<FaReact />}
            i5={<TbBrandVite />}
          />

          <GeneralBoxProject
            title={"Gerador de relatórios (Grupo NTSec)"}
            subtitle={
              "O sistema consiste em uma API que gera relatório de templates\n" +
              "flexíveis construídos com Jaspersoft. A rota foi construída em\n" +
              "Python com Flask, sendo utilizada em outros projetos onde\n" +
              "demandavam a mesma necessidade de geração de relatórios;"
            }
            i1={<FaPython />}
            i2={<SiFlask />}
            i3={<BiLogoPostgresql />}
            i4={<LiaJava />}
          />

          <GeneralBoxProject
            title={"SRH (Grupo NTSec)"}
            subtitle={
              "Automação de relatórios coletando dados da API da Cloudflare, construção de gráficos" +
              "utilizando Grafana e disponibilizando em relatórios para Gestores de contratos."
            }
            i1={<FaPython />}
            i2={<SiDjango />}
            i3={<FaReact />}
            i4={<SiGrafana />}
            i5={<SiElasticsearch />}
            i6={<TbBrandGraphql />}
          />

          <GeneralBoxProject
            title={"API de autenticação com Python e Django"}
            subtitle={
              "Este projeto visa desenvolver um sistema de autenticação de\n" +
              "usuários completo em Django, permitindo registro, login,\n" +
              "recuperação de senha e gerenciamento de perfis. A segurança será\n" +
              "garantida por meio de validações e proteção de dados."
            }
            sideTitle={"Projeto no Github"}
            sideSubtile={
              "Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!"
            }
            i1={<FaPython />}
            i2={<SiDjango />}
            projectLink={"https://github.com/gusdev-r/login-api-system"}
          />

          <GeneralBoxProject
            title={"EnX (Projeto universitário)"}
            subtitle={
              "O encurtador de URL consiste em um projeto web com Frontend feito em\n" +
              "React com JavaScript e seu Backend com Python e Django. Sistema simples de armazenamento" +
              "de Url e novo redirecionamento com hash reduzido do artefato."
            }
            sideTitle={"Projeto no Github"}
            sideSubtile={
              "Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!"
            }
            i1={<FaPython />}
            i2={<SiDjango />}
            i4={<FaReact />}
            i5={<BiLogoPostgresql />}
            projectLink={"https://github.com/gusdev-r/shortner_url"}
          />

          <GeneralBoxProject
            title={"Pokedex reativa (Projeto universitário)"}
            subtitle={
              "Este projeto tem como objetivo desenvolver um sistema reativo\n" +
              "com MongoDB e AWS EC2 para as aulas de Computação em Nuvem da\n" +
              "Universidade Católica de Brasília. Focado em escalabilidade e\n" +
              "desempenho, ele permitirá que os alunos pratiquem a integração\n" +
              "de tecnologias em um ambiente de nuvem."
            }
            sideTitle={"Projeto no Github"}
            sideSubtile={
              "Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!"
            }
            i1={<FaJava />}
            i2={<SiSpring />}
            i3={<RiJavascriptFill />}
            i4={<FaReact />}
            projectLink={"https://github.com/gusdev-r/pokedex-aws"}
          />

          <GeneralBoxProject
            title={"Descobrimento do Brasil (Projeto universitário)"}
            subtitle={
              "O Descobrimento do Brasil foi um projeto desenvolvido para fins de\n" +
              "apresentação e ensinamento de HTML e CSS na Universidade\n" +
              "Católica de Brasília (UCB) para os colegas de classe. Construído\n" +
              "com HTML, CSS e JavaScript."
            }
            sideTitle={"Projeto no Github"}
            sideSubtile={
              "Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!"
            }
            i1={<FaHtml5 />}
            i2={<FaCss3 />}
            i3={<RiJavascriptFill />}
            projectLink={"https://github.com/gusdev-r/educational-website-ucb"}
          />
        </ProjContainer>
      </MainContent>
      <div className="aboutThis">
        <StyledBigTitle
          textAlign="center"
          fontSize="2.2rem"
          color="var(--grey5)"
        >
          Sobre o portifólio
        </StyledBigTitle>
        <StyledSmallSubTitle id="desc" textAlign="center" maxWidth="60%">
          O Portfólio é feito em{" "}
          <span style={{ color: "var(--grey6)" }}>React + JavaScript.</span>{" "}
          Caso você queira executar o projeto, basta seguir o passo a passo no
          repositório do Github para subir de forma separada ou junta conforme
          instruções do README.
        </StyledSmallSubTitle>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default Projects;
