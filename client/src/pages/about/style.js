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
  height: 30rem;

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

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
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

  @media ${breakpoint.sm2} {
    height: auto;
    padding: 32px 0;
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
  width: 60%;
  height: 19rem;
  margin-top: 1rem;
  padding: 2rem 0 0 2rem;
  border-radius: 2rem;
  border: 2px solid var(--grey2);

  @media ${breakpoint.md1} {
    margin: 0 10px 50px 10px;
  }

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    align-items: center;
    text-align: center;
    margin: 0 50px 50px 50px;
  }
`

export const IconContact = styled.div`
  margin-bottom: 10px;

  svg {
    font-size: 48px;
  }

  @media ${breakpoint.sm1} {
    svg {
      font-size: 38px;
    }
  }
`

export const ContactLink = styled.a`
  font-size: 16px;
  text-decoration: underline;
  margin-top: 24px;
  color: var(--greyDefault);
  transition: var(--transition-all-ease-fast);

  &:hover {
    color: var(--whiteDefault);
  }

  @media ${breakpoint.sm1} {
    font-size: 12px;
    margin-top: 12px;
  }
`

export const StyledBigTitle = styled.h1`
  font-size: 4.5rem;
  max-width: 70rem;
  text-align: center;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;
  /* background-color: red; */

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

export const StyledMediumTitle = styled.h1`
  font-size: 2rem;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  margin-bottom: 24px;
  line-height: 1.5;
  @media ${breakpoint.md1} {
    font-size: 34px;
  }

  @media ${breakpoint.sm2} {
    font-size: 32px;
    text-align: center;
  }

  @media ${breakpoint.sm1} {
    font-size: 30px;
    text-align: center;
  }
`

export const StyledSmallTitle = styled.h1`
  font-size: 28px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  margin-bottom: 16px;
  line-height: 1.4;

  @media ${breakpoint.md1} {
    font-size: 26px;
  }

  @media ${breakpoint.sm2} {
    font-size: 24px;
  }

  @media ${breakpoint.sm1} {
    font-size: 22px;
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
  padding: 70px;

  @media ${breakpoint.md1} {
    padding: 50px;
  }

  @media ${breakpoint.sm2} {
    padding: 40px;
  }

  @media ${breakpoint.sm1} {
    padding: 20px;
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

export const DescribeImg = styled.img`
  height: 34rem;
  width: 34rem;
  border-radius: 1rem;

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
