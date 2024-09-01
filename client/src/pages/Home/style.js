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

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--greyDefault);
  }
`

export const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  /* text-align: center; */
  /* align-items: center; */
  /* margin: 2rem 0; */
  /* padding: 1rem; */
  height: 16rem;
  /* padding-top: 10rem; */
  /* background-color: white; */
`

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 7rem;

  h1 {
    margin: 0;
    font-size: 56px;
    color: var(--greyDefault);
  }
`

export const InfoText = styled.div`
  max-width: 600px;
  color: var(--greyDefault);
  margin-right: 7rem;
  text-align: left;
  line-height: 18px;
`

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--grey3); */
  width: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: var(--grey2); */
`

export const ButtonNow = styled.button`
  padding: 12px 20px;
  background: none;
  border: 1.5px solid var(--greyDefault);
  color: var(--whiteDefault);
  font-weight: 300;
  border-radius: 8px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  /* background-color: var(--blackDefault); */

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
