import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledSmallSubTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0rem'};
  width: ${({ width }) => width || '100%'};

  @media ${breakpoint.sm1} {
    font-size: 0.9rem;
  }
  @media ${breakpoint.mob1} {
    font-size: 0.8rem;
  }
`
