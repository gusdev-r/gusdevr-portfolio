import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
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
  .infoSocial {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }
`

export const MainContent = styled.main`
  padding-top: 5rem;
  flex: 1;
  color: var(--greyDefault);
  margin: 2rem 10rem;

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
  height: 18rem;
  width: 100%;
  p {
    width: 70%;
  }
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
  padding: 2rem 0;
  width: 100%;
  margin-bottom: 2rem;

  svg {
    cursor: pointer;
    font-size: 1.8rem;
    color: var(--grey6);
    transition: color 0.5s ease;
    &:hover {
      color: var(--grey4);
    }
  }
  .contSocial {
    justify-content: center;
    gap: 1rem;
    display: flex;
    margin: 1rem 0;
  }

  @media ${breakpoint.sm2} {
    padding: 48px 0;
  }

  @media ${breakpoint.sm1} {
    padding: 32px 0;
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
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

  @media ${breakpoint.sm2} {
    gap: 24px;
    max-width: 350px;
    margin-bottom: 2rem;
  }
`

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20em;
  width: 55rem;
  align-items: center;
  padding: 0 2.5rem;
  border-radius: 2rem;
  border: 2px solid var(--grey2);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 25px 0px rgba(66, 66, 66, 0.546);
    svg {
      color: var(--grey8);
    }
  }

  .handleMessage {
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    width: 100%;
  }
  svg {
    font-size: 10rem;
    margin-right: 2rem;
    color: var(--grey5);
    transition: color 0.5s ease;
  }

  @media ${breakpoint.sm2} {
    width: 40rem;
  }
  @media ${breakpoint.sm1} {
    width: 30rem;
    svg {
      font-size: 6rem;
      margin-right: 0.5rem;
    }
  }
  @media ${breakpoint.sm0} {
    width: 22rem;
    height: 24rem;
    p {
      text-align: center;
      width: 100%;
    }
    flex-direction: column;
    svg {
      font-size: 4.5rem;
      margin-top: 1rem;
    }
  }
`
