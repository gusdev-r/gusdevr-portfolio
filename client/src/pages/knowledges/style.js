import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
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
  z-index: 1;
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

  @media ${breakpoint.sm2} {
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
  margin-top: 1rem;

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

  @media ${breakpoint.md1} {
    svg {
      font-size: 2rem;
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

export const KnowContainer = styled.div`
  height: 30%;
  margin-bottom: 5rem;
  @media ${breakpoint.md1} {
    margin-bottom: 5rem;
  }
`

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
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
    @media ${breakpoint.md1} {
      font-size: 16rem;
    }
  }
  @media ${breakpoint.sm1} {
    flex-direction: column;
    margin-top: 2rem;
    p {
      text-align: center;
    }
  }
`
