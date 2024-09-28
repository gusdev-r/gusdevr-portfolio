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

    #desc {
      max-width: 55%;
    }
  }
`
export const MainContent = styled.main`
  padding-top: 5rem;
  flex: 1;
  color: var(--greyDefault);

  section {
    margin: 0 auto;
    padding: 16px;
  }

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
  width: 90rem;

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
  flex-direction: column;
  height: 18rem;
`
export const StyledBigTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '5rem'};
  max-width: 70rem;
  text-align: ${({ textAling }) => textAling || 'left'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.2;
  padding-bottom: 1rem;

  @media ${breakpoint.md1} {
    font-size: 48px;
  }

  @media ${breakpoint.sm2} {
    font-size: 44px;
  }

  @media ${breakpoint.sm1} {
    font-size: 40px;
  }
`
export const StyledSmallSubTitle = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: 1.5;
  width: ${({ width }) => width || '70%'};

  @media ${breakpoint.md1} {
    font-size: 16px;
  }

  @media ${breakpoint.sm2} {
    font-size: 15px;
    text-align: center;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
    text-align: center;
  }
`
export const ProjContainer = styled.section`
  width: 95%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const ProjBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 18em;
  width: 42rem;
  align-items: center;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;
  border: 2px solid var(--grey1);

  svg {
    font-size: 0.8rem;
    padding: 0.4rem;
    color: var(--grey6);
  }

  &:hover {
    box-shadow: 0 0 25px 0px rgba(66, 66, 66, 0.546);
    svg {
      color: var(--grey8);
    }
  }
`
