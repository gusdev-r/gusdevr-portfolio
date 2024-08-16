import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.color || "black"};
  margin: 10px 0;
  font-weight: 700;
  text-align: center;
  transition: color 0.5s ease;
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
    margin: 1px;
  }
`;
