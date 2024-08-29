import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background: linear-gradient(
    to right,
    rgb(34, 34, 34),
    rgba(249, 249, 249, 0.476) 160%
  );
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  height: 40rem;
  width: 70rem;
  border-radius: 13px;
  background: linear-gradient(
    to right,
    rgb(34, 34, 34),
    rgba(249, 249, 249, 0.476) 160%
  );
  display: flex;
  box-shadow: 0px 0px 15px 8px rgba(44, 44, 44, 0.086);
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media ${breakpoint.md1} {
    height: 35rem;
    width: 59rem;
  }
  @media ${breakpoint.sm2} {
    width: 35rem;
  }
  @media ${breakpoint.sm1} {
    background: none;
    height: 31rem;
    width: 17rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

export const FormBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  background-color: hsl(0, 0%, 100%);
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
    max-width: 11rem;
  }
  @media ${breakpoint.sm1} {
    display: none;
  }
`

export const SubTitle = styled.text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2rem;
  @media ${breakpoint.md1} {
    font-size: 12px;
  }
  @media ${breakpoint.sm2} {
    font-size: 10px;
  }
  @media ${breakpoint.sm1} {
    font-size: 9px;
  }
`

export const ButtonSubmit = styled.button`
  border-radius: 13px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.color || 'black'};
  color: white;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  margin-top: 10px;
  padding: 16px 28px;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
  @media ${breakpoint.md1} {
    font-size: 12px;
    margin-top: 6px;
    padding: 12px 22px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    margin-top: 6px;
    padding: 12px 22px;
  }
`
