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
  border-radius: 42px;
  background: linear-gradient(to left, rgb(16, 16, 16), rgb(0, 0, 0) 160%);
  display: flex;
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.196);
  margin-top: 5.5rem;
  margin-bottom: 5.5rem;
  border: 1px solid var(--gray3);

  @media ${breakpoint.md1} {
    height: 38rem;
    width: 50rem;
  }
  @media ${breakpoint.sm2} {
    height: 30rem;
    width: 40rem;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  @media ${breakpoint.sm1} {
    background: none;
    height: 31rem;
    width: 17rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 22px;
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
    padding: 2rem;
    border-radius: 13px;
  }
`

export const LogoBox = styled.div`
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--gray0);
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
  color: var(--gray0);

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
  color: var(--gray0);
  text-decoration: none;
  padding: 2px;
  transition: color 0.3s ease;
  text-decoration: underline;

  &:hover {
    color: var(--whiteDefault);
  }
`

export const ButtonSubmit = styled.button`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--blackDefault);
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 14px 26px;
  font-weight: 700;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
  @media ${breakpoint.md1} {
    font-size: 12px;
    margin-top: 6px;
    padding: 11px 21px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    margin-top: 6px;
    padding: 10px 18px;
  }
`
export const GoogleLogin = styled.button`
  width: 100%;
  border: 1.5px solid var(--gray3);
  color: var(--whiteDefault);
  font-weight: 700;
  border-radius: 8px;
  margin-top: 6px;
  background: none;
  padding: 14px 26px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    background-color: var(--gray3);
  }

  @media ${breakpoint.md1} {
    font-size: 12px;
    margin-top: 6px;
    padding: 10px 20px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    margin-top: 6px;
    padding: 9px 19px;
  }
`
