import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledMediumSubTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem)'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  width: ${({ width }) => width || '100%'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0rem'};
  line-height: 1.6;

  @media ${breakpoint.md1} {
    font-size: 18px;
  }

  @media ${breakpoint.sm2} {
    font-size: 1rem;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
`
