import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`
export const MainContent = styled.main`
  padding-top: 3rem;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);

  section {
    margin: 0 auto;
    padding: 1rem;
  }
`

export const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  /* padding: 6rem 0; */
  height: 15rem;
  /* background-color: var(--grey7); // */
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 7rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 56px;
  color: var(--greyDefault);
`

export const TitleDesc = styled.p`
  max-width: 600px;
  color: var(--greyDefault);
  margin-bottom: 1rem;
  text-align: left;
  line-height: 1.6;
`

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; // */
  margin-right: 7rem;
`

export const ButtonNow = styled.button`
  padding: 12px 20px;
  background: none;
  border: 1.5px solid var(--greyDefault);
  color: var(--whiteDefault);
  font-weight: 300;
  border-radius: 8px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: var(--grey2);
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  text-align: left;
  margin-top: 24px;
`

export const ContainerCarousel = styled.div`
  display: flex;
`

export const DescribeSection = styled.div`
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-content: space-between; */
  /* background-color: wheat; // */
`

export const DescribeContainer = styled.div`
  /* background-color: greenyellow; // */
  padding: 70px;
`

export const DescribeImg = styled.img`
  height: 620px;
  width: 640px;
  padding: 12px 24px;
`

export const TechSection = styled.div`
  padding: 2em 0;
  display: flex;
  /* background-color: var(--grey1); // */
  justify-content: center;
`

export const TechContainer = styled.div`
  /* background-color: var(--grey2); // dentro */
  max-width: 1200px;
  width: 100%;
  padding: 50px;
  text-align: center;
  height: 18rem;
`

export const IconContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: grey; // */
  height: 7rem;

  svg {
    color: var(--whiteDefault);
    font-size: 40px;
    transition: font-size 0.3s ease-in-out;
    animation: none;
  }

  svg:hover {
    font-size: 50px;
  }
`
export const SubTitleTech = styled.p`
  max-width: 600px;
  color: var(--greyDefault);
  display: unset;
  text-align: left;
  line-height: 1.6;
`

export const ContactSection = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  /* background-color: var(--grey1); // */
  width: 85%;
`

export const BoxContact = styled.div`
  /* background-color: var(--grey3); // */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
`

export const ContactLink = styled.a`
  font-size: 1rem;
  color: var(--greyDefault);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const IconContact = styled.div`
  margin-bottom: 1rem;
  /* background-color: white; */
`

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
