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

  div {
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--greyDefault);
  }
`
