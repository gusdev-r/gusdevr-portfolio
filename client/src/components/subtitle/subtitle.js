import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const SubTitle = styled.text`
  max-width: 75%;
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
