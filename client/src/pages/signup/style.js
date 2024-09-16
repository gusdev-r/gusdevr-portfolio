import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background: linear-gradient(to right, rgb(24, 24, 24), rgb(0, 0, 0) 190%);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  height: 42rem;
  width: 70rem;
  display: flex;
  background: linear-gradient(to left, rgb(16, 16, 16), rgb(0, 0, 0) 160%);
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.196);
  border-radius: 42px;
  margin: 88px 0;
  border: 1px solid var(--grey2);

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;

  @media ${breakpoint.sm1} {
    box-shadow: none;
    padding: 32px;
    border-radius: 13px;
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

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 14px 26px;
  color: var(--whiteDefault);
  transition: var(--transition-width-fast);
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  background-color: var(--blackDefault);
  font-weight: 700;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    transition: var(--transition-width-fast);
    border-radius: 8px;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    background-color: var(--grey1);
    position: absolute;
    z-index: -1;
  }

  &:hover {
    color: var(--white1);
  }

  &:hover::before {
    width: 100%;
  }

  @media ${breakpoint.md1} {
    font-size: 12px;
    margin-top: 6px;
    padding: 11px 21px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    padding: 9px 19px;
    margin-top: 6px;
  }
`

export const GoogleLogin = styled.button`
  width: 100%;
  padding: 14px 26px;
  color: var(--whiteDefault);
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  border: 1.5px solid var(--grey1);
  margin-top: 6px;
  background: none;
  font-weight: 700;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    background-color: var(--grey2);
  }

  @media ${breakpoint.md1} {
    font-size: 12px;
    padding: 10px 20px;
    margin-top: 6px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    padding: 9px 19px;
    margin-top: 6px;
  }
`

export const AlternativeJoin = styled.p`
  font-size: 12px;
  color: var(--greyDefault);
  font-weight: 400;
  margin: 16px 0 32px;

  @media ${breakpoint.md1} {
    font-size: 10px;
  }
  @media ${breakpoint.sm2} {
    font-size: 8px;
    margin: 8px 0;
  }
  @media ${breakpoint.sm1} {
    font-size: 7px;
    margin: 8px 0;
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

export const SubTitle = styled.text`
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
