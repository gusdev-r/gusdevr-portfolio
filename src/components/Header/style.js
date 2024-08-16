import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const HeaderComp = styled.header`
  height: 7.5rem;
  width: 100%;
  background-color: hsl(0, 0%, 9%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @media ${breakpoint.sm1} {
    height: 6.5rem;
  }
`;

export const ContainerElements = styled.li`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 20px 30px 20px 60px;
  &.active > a {
    color: #6c757d;
  }
  &.disabled > a {
    color: #6c757d;
    pointer-events: none;
  }
  @media ${breakpoint.bg1} {
    gap: 2rem;
    padding: 20px 30px 20px 20px;
  }
`;

export const Element = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 8px 16px;
  color: ${(props) => props.color || "#6e6d6d"};
  cursor: pointer;
  transition: all ease 0.5s;
  font-size: 15px;
  &:hover {
    color: ${(props) => props.bgColorHover || "white"};
  }
  @media ${breakpoint.bg1} {
    font-size: 13px;
    padding: 4px 8px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`;

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-left: 50px;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 80%;
  left: 0;
  /* z-index: 1000; */
  flex-direction: column;
  padding: 8px 0;
  margin: 8px 0 0;
  border: none;
  border-radius: 13px;
  background-color: #636363;
  border: 1px solid grey;

  ${Dropdown}:hover & {
    display: flex;
  }
  @media ${breakpoint.bg1} {
    padding: 0.5rem 0;
    margin: 0.5rem 0 0;
    font-size: 10px;
  }
`;

export const DropdownItem = styled.a`
  width: 10rem;
  padding: 0.25rem 1rem;
  color: #000;
  text-decoration: none;
  transition: all 0.4s;
  font-size: 16px;

  &:hover {
    background-color: #303030;
    color: #fff;
  }
  @media ${breakpoint.bg1} {
    font-size: 10px;
    width: 6rem;
  }
`;

export const Button = styled.button`
  border-radius: 13px;
  cursor: pointer;
  border: 2px solid white;
  background-color: transparent;
  color: ${(props) => props.color || "white"};
  padding: 8px 20px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  margin-left: 10px;
  font-weight: 500;
  &:hover {
    background-color: ${(props) => props.bgColorHover || "#8e8e8e"};
    color: ${(props) => props.colorHover || "#8e8e8e"};
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
  @media ${breakpoint.bg1} {
    padding: 6px 16px;
    font-size: 10px;
  }
  @media ${breakpoint.sm2} {
    display: none;
  }
`;

export const FormInline = styled.form`
  position: relative;
  display: block;
  width: 29rem;
  align-items: center;
  margin: 8px 8px;
  padding: 8px 8px;
  @media ${breakpoint.bg1} {
    width: 26rem;
  }
  @media ${breakpoint.md1} {
    display: none;
  }
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 2.5rem 0.375rem 0.75rem;
  font-size: 15px;
  color: #495057;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 13px;
  @media ${breakpoint.bg1} {
    font-size: 12px;
  }
  /* background-color: blue; */
`;

// export const Icon = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 31.45rem;
//   transform: translateY(-50%);
//   width: 1.4rem;
//   height: 1.4rem;
//   cursor: pointer;
// `;
