import { HeaderHome } from '../../components/HeaderHome/headerHome'
import { Carousel } from '../../components/Carousel/carousel'
import { Footer } from '../../components/Footer/footer'
import { PageContainer, MainContent } from './style'

const Home = () => {
  return (
    <>
      <PageContainer>
        <HeaderHome />
        <MainContent>
          <Carousel />
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
