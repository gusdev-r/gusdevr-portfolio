import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`

export const MainContent = styled.main`
  padding-top: 48px;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin: 0 15rem;

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
  height: 22rem;

  @media ${breakpoint.sm1} {
    height: auto;
    padding: 32px 0;
  }
`

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const TechSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0;

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
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  @media ${breakpoint.md1} {
    gap: 24px;
    max-width: 450px;
  }

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    gap: 24px;
    max-width: 350px;
    margin-bottom: 40px;
  }
`

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--greyDefault);
  transition: color 0.3s ease-in-out;

  svg {
    font-size: 48px;
    margin-bottom: 8px;
    transition: transform 0.5s ease-in-out;
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

  &:nth-child(1) {
    animation: icon-sequence 12s infinite;
  }
  &:nth-child(2) {
    animation: icon-sequence 12s infinite 1.33s;
  }
  &:nth-child(3) {
    animation: icon-sequence 12s infinite 2.67s;
  }
  &:nth-child(4) {
    animation: icon-sequence 12s infinite 4s;
  }
  &:nth-child(5) {
    animation: icon-sequence 12s infinite 5.33s;
  }
  &:nth-child(6) {
    animation: icon-sequence 12s infinite 6.67s;
  }
  &:nth-child(7) {
    animation: icon-sequence 12s infinite 8s;
  }
  &:nth-child(8) {
    animation: icon-sequence 12s infinite 9.33s;
  }
  &:nth-child(9) {
    animation: icon-sequence 12s infinite 10.67s;
  }

  @keyframes icon-sequence {
    0%,
    20%,
    100% {
      color: var(--greyDefault);
      transform: scale(1);
    }
    10% {
      color: var(--whiteDefault);
      transform: scale(1.2);
    }
    30% {
      color: var(--greyDefault);
      transform: scale(1);
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

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${breakpoint.sm2}, ${breakpoint.sm1} {
    flex-direction: column;
    align-items: center;
  }
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin-bottom: 32px;

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
  font-size: 52px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;

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

export const StyledMediumSubTitle = styled.p`
  font-size: 20px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
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

export const StyledSmallSubTitle = styled.p`
  font-size: 17px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: left;
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
  font-size: 36px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  margin-bottom: 24px;
  text-align: left;
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

export const DescribeImg = styled.img`
  height: 620px;
  width: 640px;
  padding: 12px 24px;

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
