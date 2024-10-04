import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(
    circle at 0% 50%,
    var(--grey8) -400%,
    var(--blackDefault) 70%
  );

  .aboutThis {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 20rem;
    margin: 2rem;
    #desc {
      max-width: 70%;
    }
  }
`
export const MainContent = styled.main`
  padding-top: 5rem;
  flex: 1;
  color: var(--greyDefault);

  @media ${breakpoint.md1} {
    margin: 0 10rem;
  }

  @media ${breakpoint.sm2} {
    margin: 0 80px;
  }

  @media ${breakpoint.sm1} {
    margin: 0;
  }
`

export const TechSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  svg {
    cursor: pointer;
    font-size: rem;
    color: var(--grey6);
    transition: color 0.5s ease;
    &:hover {
      color: var(--grey4);
    }
  }

  @media ${breakpoint.sm2} {
    padding: 48px 0;
  }

  @media ${breakpoint.sm1} {
    padding: 32px 0;
    margin: 0 50px 0px 50px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 18rem;
  width: 90%;
  margin-bottom: 2rem;
  p {
    max-width: 70%;
  }
  @media ${breakpoint.mob1} {
    p {
      max-width: 100%;
    }
  }
`

export const ProjContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 0fr);
  gap: 2rem;

  @media ${breakpoint.md1} {
    grid-template-columns: repeat(1, 0fr);
  }
`
