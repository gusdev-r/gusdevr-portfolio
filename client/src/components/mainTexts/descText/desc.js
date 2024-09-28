import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledSmallSubTitle = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0rem'};
  width: ${({ width }) => width || '100%'};

  @media ${breakpoint.sm2} {
    font-size: 15px;
    text-align: center;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
    text-align: center;
  }
`
