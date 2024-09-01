import { HeaderHome } from '../../components/HeaderHome/headerHome'
import { Carousel } from '../../components/Carousel/carousel'
import { Footer } from '../../components/Footer/footer'
import {
  PageContainer,
  MainContent,
  WelcomeSection,
  Title,
  InfoText,
  WelcomeContainer,
  InfoContainer,
  ButtonNow,
  ContainerButtons,
  ContainerCarousel,
} from './style'

const Home = () => {
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <ContainerCarousel>
            <Carousel />
          </ContainerCarousel>
          <WelcomeSection>
            <WelcomeContainer>
              <Title>
                <h1>Welcome To</h1>
                <h1>Snug</h1>
              </Title>
              <InfoContainer>
                <InfoText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmo.
                </InfoText>
                <ContainerButtons>
                  <ButtonNow>Book Now</ButtonNow>
                  <ButtonNow>View Menu</ButtonNow>
                </ContainerButtons>
              </InfoContainer>
            </WelcomeContainer>
          </WelcomeSection>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
