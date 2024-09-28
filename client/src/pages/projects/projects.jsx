import { FaCss3, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa'
import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiSpringsecurity,
} from 'react-icons/si'
import { Footer } from '../../components/Footer/footer'
import { HeaderHome } from '../about/components/headerHome/headerHome'
import {
  InfoContainer,
  MainContent,
  PageContainer,
  ProjContainer,
  StyledBigTitle,
  StyledSmallSubTitle,
  TechSection,
} from './style'

import { DiJavascript } from 'react-icons/di'
import GeneralBoxProject from './components/projectBox/box'

const Projects = () => {
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <TechSection>
            <InfoContainer>
              <StyledBigTitle textAling="center">
                Projetos de atuação
              </StyledBigTitle>
              <StyledSmallSubTitle textAling="center">
                Bem-vindo à sessão de Projetos! Aqui, você encontrará uma
                seleção dos meus trabalhos mais empolgantes. Cada projeto
                reflete minha paixão pela programação e meu desejo de impactar
                positivamente a comunidade. Explore e descubra como cada criação
                faz parte da minha jornada!
              </StyledSmallSubTitle>
            </InfoContainer>
          </TechSection>
          <ProjContainer>
            <GeneralBoxProject
              title={'Sistema de administração de estacionamento'}
              subtitle={
                'O projeto envolve a marcação de vagas de um estacionamento \n' +
                'para com os moradores que ocupam essas vagas.\n' +
                'Possui cadastro e login com autenticação.\n' +
                'Construído com Java, Spring Boot, Spring Sec, Spring JPA, etc.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaJava />}
              i2={<SiSpring />}
              i3={<SiSpringsecurity />}
              i4={<SiMysql />}
              projectLink={'https://github.com/gusdev-r/parking-administration'}
            />
            <GeneralBoxProject
              title={'Desafio PicPay - API de transferência'}
              subtitle={
                'Este desafio de backend, solicitava a criação de uma api para \n' +
                'pagamentos entre comerciantes de estabelecimentos. Um dos\n' +
                'requisitos era a utilização de Arquitetura Limpa no\n' +
                'desenvolvimento. Construído com Java e Spring Boot.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaJava />}
              i2={<SiSpring />}
              i3={<SiPostgresql />}
              projectLink={'https://github.com/gusdev-r/transfer-shop'}
            />

            <GeneralBoxProject
              title={'Gerador de relatórios'}
              subtitle={
                'O sistema consiste em uma API que gera relatório de templates\n' +
                'flexíveis construídos com Jaspersoft. A rota foi construída em\n' +
                'Python com Flask, sendo utilizada em outros projetos onde\n' +
                'demandavam a mesma necessidade de geração de relatórios;'
              }
              sideTitle={'Ambiente corporativo'}
              sideSubtile={
                'Este projeto foi desenvolvido em ambiente comporativo, não é possível compartilhar.'
              }
              i1={<FaPython />}
              i2={<SiFlask />}
            />

            <GeneralBoxProject
              title={'Criações e manutenção de projetos'}
              subtitle={
                'Nos projetos onde atuei em squad, atuei com o desenvolvimento\n' +
                'tanto no backend quanto no frontend, realizando a manutenção e\n' +
                'criação de requisitos em mais de 5 projetos diferentes.\n' +
                'Trabalhando com Python e JavaScript.'
              }
              sideTitle={'Ambiente corporativo'}
              sideSubtile={
                'Este projeto foi desenvolvido em ambiente comporativo, não é possível compartilhar.'
              }
              i1={<FaPython />}
              i2={<SiDjango />}
              i3={<DiJavascript />}
              i4={<FaReact />}
              i5={<SiPostgresql />}
            />

            <GeneralBoxProject
              title={'API de autenticação com Python e Django'}
              subtitle={
                'Este projeto visa desenvolver um sistema de autenticação de\n' +
                'usuários completo em Django, permitindo registro, login,\n' +
                'recuperação de senha e gerenciamento de perfis. A segurança será\n' +
                'garantida por meio de validações e proteção de dados.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaPython />}
              i2={<SiDjango />}
              projectLink={'https://github.com/gusdev-r/login-api-system'}
            />

            <GeneralBoxProject
              title={'Enx - Encurtador de URL'}
              subtitle={
                'O encurtador de URL consiste em projeto web com Client feito em\n' +
                'React com JavaScript e Server com Python e Django. Na parte de\n' +
                'armazenamento, a aplicação foi dockerizada e o container do\n' +
                'PostgreSQL é executado e ligado com a outra parte da aplicação\n' +
                'em si.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaPython />}
              i2={<SiDjango />}
              i3={<DiJavascript />}
              i4={<FaReact />}
              i5={<SiPostgresql />}
              projectLink={'https://github.com/gusdev-r/shortner_url'}
            />

            <GeneralBoxProject
              title={'Pokedex reativa - AWS - MongoDB'}
              subtitle={
                'Este projeto tem como objetivo desenvolver um sistema reativo\n' +
                'com MongoDB e AWS EC2 para as aulas de Computação em Nuvem da\n' +
                'Universidade Católica de Brasília. Focado em escalabilidade e\n' +
                'desempenho, ele permitirá que os alunos pratiquem a integração\n' +
                'de tecnologias em um ambiente de nuvem.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaJava />}
              i2={<SiDjango />}
              i3={<DiJavascript />}
              i4={<FaReact />}
              projectLink={'https://github.com/gusdev-r/pokedex-aws'}
            />

            <GeneralBoxProject
              title={'Blog educacional - UCB'}
              subtitle={
                'O Blog educacional foi um projeto desenvolvido para fins de\n' +
                'apresentação e ensinamento de HTML e CSS na Universidade\n' +
                'Católica de Brasília (UCB) para os colegas de classe. Construído\n' +
                'com HTML, CSS e JavaScript.'
              }
              sideTitle={'Projeto no Github'}
              sideSubtile={
                'Clique aqui e veja o projeto no meu repositório ou viste a página Redes sociais e confira o acesso por lá!'
              }
              i1={<FaHtml5 />}
              i2={<FaCss3 />}
              projectLink={
                'https://github.com/gusdev-r/educational-website-ucb'
              }
            />
          </ProjContainer>
        </MainContent>
        <div className="aboutThis">
          <StyledBigTitle
            fontSize="2rem"
            textAling="center"
            color="var(--grey6)"
          >
            Sobre este projeto
          </StyledBigTitle>
          <StyledSmallSubTitle id="desc" textAling="center">
            O portifólio possui um Backend em Java e um Frotend com React +
            JavaScript. Caso você queira executar o projeto, basta seguir o
            passo a passo no repositório do Github para subir de forma separada
            ou junta conforme instruções do README.
          </StyledSmallSubTitle>
        </div>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Projects
