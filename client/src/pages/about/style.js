import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(
    circle at 100% 50%,
    var(--grey8) -350%,
    var(--blackDefault) 60%
  );
`

export const MainContent = styled.main`
  padding-top: 5rem;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin: 2rem 15rem;

  #handleInteress {
    height: 25rem;
    @media ${breakpoint.sm1} {
      height: 18rem;
    }
  }

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

export const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;

  @media ${breakpoint.sm1} {
    height: auto;
    padding: 2rem 0;
  }
`

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${breakpoint.sm2} {
    flex-direction: column;
    margin: 40px 0;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  height: 30rem;
  align-items: center;
  margin-top: 0.5rem;

  @media ${breakpoint.sm2} {
    height: auto;
    padding: 32px 0;
    height: 20rem;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    flex-direction: column;
    align-items: center;
  }
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  height: 19rem;
  padding: 2rem 0 0 2rem;
  border-radius: 2rem;
  border: 2px solid var(--grey2);

  @media ${breakpoint.md1} {
    margin: 0 10px 50px 10px;
  }

  @media ${breakpoint.sm2} {
    align-items: center;
    text-align: center;
    margin: 0 50px 50px 50px;
    padding-right: 1rem;
    border-radius: 1rem;
    height: 16rem;
  }
`

export const IconContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 10px;

  svg {
    font-size: 3rem;
  }

  @media ${breakpoint.sm1} {
    svg {
      font-size: 2rem;
    }
  }
`

export const ContactLink = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  margin-top: 24px;
  color: var(--greyDefault);
  transition: var(--transition-all-ease-fast);

  &:hover {
    color: var(--whiteDefault);
  }

  @media ${breakpoint.sm1} {
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 12px;
  }
`

export const DescribeSection = styled.div`
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.md1} {
    height: 45rem;
  }

  @media ${breakpoint.sm2} {
    flex-direction: column;
    height: auto;
    padding: 48px 0;
  }

  @media ${breakpoint.sm1} {
    padding: 32px 0;
  }
`

export const DescribeContainer = styled.div`
  padding: 4rem;

  @media ${breakpoint.md1} {
    padding: 3rem;
  }

  @media ${breakpoint.sm2} {
    padding: 2.3rem;
  }

  @media ${breakpoint.sm1} {
    padding: 2rem;
  }
`

export const StyledMediumSubTitle = styled.p`
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
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

export const DescribeImg = styled.img`
  height: 34rem;
  width: 34rem;
  filter: brightness(0.8);
  border-radius: 1rem;
  border: 4px solid var(--grey2);
  box-shadow: 0 0 25px 0px rgba(66, 66, 66, 0.646);

  @media ${breakpoint.md1} {
    height: 520px;
    width: 540px;
  }

  @media ${breakpoint.sm2} {
    height: 420px;
    width: 440px;
  }

  @media ${breakpoint.sm1} {
    height: 320px;
    width: 340px;
    padding: 0;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
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
    font-size: 0.7rem;
  }
`
