import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledBigTitle = styled.h1`
  font-size: 5rem;
  max-width: 70rem;
  text-align: ${({ textAling }) => textAling || 'left'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.2;
  padding-bottom: 1rem;

  @media ${breakpoint.md1} {
    font-size: 3rem;
  }

  @media ${breakpoint.sm2} {
    font-size: 44px;
  }

  @media ${breakpoint.sm1} {
    font-size: 40px;
  }
`
