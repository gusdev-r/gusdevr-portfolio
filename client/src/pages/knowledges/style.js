import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(
    circle at 50% -40%,
    var(--grey8) -400%,
    var(--blackDefault) 70%
  );

  a {
    text-decoration: none;
  }
`

export const MainContent = styled.main`
  padding-top: 5rem;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin: 2rem 15rem;

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

export const StyledBigTitle = styled.h1`
  font-size: 5rem;
  max-width: 70rem;
  text-align: center;
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
  width: 70%;

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

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'none'};
  gap: 16px;
  margin-top: 24px;

  .projects {
    padding: 12px 6rem;
  }

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    justify-content: center;
  }
`

export const Buttons = styled.button`
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

  @media ${breakpoint.sm2} {
    padding: 10px 16px;
  }

  @media ${breakpoint.sm1} {
    padding: 8px 12px;
  }
`

export const TechSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;

  @media ${breakpoint.sm2} {
    padding: 48px 0;
  }

  @media ${breakpoint.sm1} {
    padding: 32px 0;
    margin: 0 50px 0px 50px;
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`

export const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media ${breakpoint.md1} {
    gap: 24px;
    max-width: 450px;
  }

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    gap: 24px;
    max-width: 350px;
    margin-bottom: 2rem;
  }
`

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--greyDefault);
  transition: color 0.3s ease-in-out;
  width: 6rem;
  height: 6rem;
  svg {
    font-size: 48px;
    margin-bottom: 8px;
    transition: transform 0.5s ease-in-out, color 0.5s ease;
    &:hover {
      color: var(--grey10);
    }
  }

  @media ${breakpoint.sm2} {
    svg {
      font-size: 42px;
    }
  }

  @media ${breakpoint.sm1} {
    svg {
      font-size: 37px;
    }
  }
`

export const IconLabel = styled.span`
  font-size: 16px;

  @media ${breakpoint.sm2} {
    font-size: 15px;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
`

export const ContactSection = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;

  @media ${breakpoint.sm2} {
    height: auto;
    padding: 32px 0;
  }
`
export const StyledMediumSubTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem)'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  line-height: 1.6;

  @media ${breakpoint.md1} {
    font-size: 18px;
  }

  @media ${breakpoint.sm2} {
    font-size: 16px;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
`

export const KnowContainer = styled.div`
  height: 15em;
  margin-bottom: 10rem;
`

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30em;
  align-items: center;

  div {
    text-align: left;
    width: 50%;
  }
  svg {
    font-size: 20rem;
    transition: color 0.5s ease;
    &:hover {
      color: var(--grey10);
    }
  }
`
