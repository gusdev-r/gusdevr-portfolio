import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledBigTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '4.5rem'};
  max-width: ${({ maxWidth }) => maxWidth || '70rem'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.2;
  padding-bottom: 1rem;

  @media ${breakpoint.md1} {
    font-size: 3.8rem;
  }

  @media ${breakpoint.sm2} {
    font-size: 3.5rem;
  }

  @media ${breakpoint.sm1} {
    font-size: 2.5rem;
  }
`
