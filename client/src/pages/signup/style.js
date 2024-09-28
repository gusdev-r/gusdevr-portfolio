import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background: radial-gradient(
    circle at 50% 200%,
    var(--grey1) 20%,
    var(--blackDefault)
  );
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

export const HandleForm = styled.div`
  align-items: center;
  justify-content: center;
  height: 42rem;
  width: 38rem;
  display: flex;
  background: radial-gradient(
    circle at 50% 0%,
    var(--grey1) -20%,
    rgb(0, 0, 0)
  );
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.196);
  border-radius: 42px;
  margin: 1rem 0;

  @media ${breakpoint.md1} {
    height: 38rem;
    width: 50rem;
  }
  @media ${breakpoint.sm2} {
    height: 32rem;
    width: 40rem;
    margin: 96px 0;
    border-radius: 28px;
  }
  @media ${breakpoint.sm1} {
    height: 31rem;
    width: 17rem;
    margin: 48px 0;
    border-radius: 28px;
    background: none;
  }
`

export const FormBox = styled.div`
  max-width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media ${breakpoint.sm1} {
    box-shadow: none;
    padding: 32px;
    border-radius: 13px;
  }
  @media ${breakpoint.md1} {
    width: 20rem;
  }

  @media ${breakpoint.sm2} {
    width: 13rem;
  }
`

export const LogoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
`

export const Logo = styled.img`
  max-width: 19rem;

  @media ${breakpoint.md1} {
    max-width: 15rem;
  }
  @media ${breakpoint.sm2} {
    max-width: 10rem;
  }
  @media ${breakpoint.sm1} {
    display: none;
  }
`

export const SubTitle = styled.text`
  max-width: 80%;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--greyDefault);
  @media ${breakpoint.md1} {
    font-size: 12px;
    margin-bottom: 1rem;
  }
  @media ${breakpoint.sm2} {
    font-size: 10px;
  }
  @media ${breakpoint.sm1} {
    font-size: 9px;
  }
`

export const AlternativeJoin = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 2rem;
  margin-top: 1rem;
  color: var(--greyDefault);

  @media ${breakpoint.md1} {
    font-size: 10px;
  }
  @media ${breakpoint.sm1} {
    font-size: 7px;
    margin-top: 0.5rem;
  }
  @media ${breakpoint.sm2} {
    margin-top: 0.5rem;
    font-size: 8px;
  }
`

export const JoinLink = styled.a`
  color: var(--greyDefault);
  text-decoration: none;
  padding: 2px;
  transition: var(--transition-color-fast);
  text-decoration: underline;

  &:hover {
    color: var(--whiteDefault);
  }
`

export const ButtonSubmit = styled.button`
  justify-content: center;
  width: 100%;
  height: 3rem;
  border: unset;
  border-radius: 8px;
  color: var(--whiteDefault);
  margin-top: 10px;
  border: none;
  z-index: 1;
  background-color: var(--blackDefault);
  position: relative;
  font-weight: 700;
  transition: var(--transition-width-fast);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 8px;
    background-color: var(--grey1);
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: var(--transition-width-fast);
  }

  &:hover {
    color: var(--white1);
  }

  &:hover::before {
    width: 100%;
  }

  @media ${breakpoint.md1} {
    font-size: 12px;
    height: 2.5rem;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    height: 2rem;
  }
`

export const GoogleLogin = styled.button`
  width: 100%;
  height: 3rem;
  border: 1.5px solid var(--grey1);
  color: var(--whiteDefault);
  font-weight: 700;
  border-radius: 8px;
  margin-top: 6px;
  margin-bottom: 0.2rem;
  background: none;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    background-color: var(--grey2);
  }

  @media ${breakpoint.md1} {
    font-size: 12px;
    height: 2.5rem;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    height: 2rem;
  }
`

export const ConfirmationTitle = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.color || 'var(--whiteDefault)'};
  margin: 1.5px 0;
  font-weight: 600;
  text-align: center;
  transition: var(--transition-color-slow);
  @media ${breakpoint.md1} {
    font-size: 1.8rem;
    margin: 4px 0;
  }
  @media ${breakpoint.sm2} {
    font-size: 1.5rem;
    margin: 2px 0;
  }
  @media ${breakpoint.sm1} {
    font-size: 1.3rem;
    margin: 0.5px;
  }
`

export const ConfirmContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`
export const HandleSelect = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-bottom: 0.5rem;
`
