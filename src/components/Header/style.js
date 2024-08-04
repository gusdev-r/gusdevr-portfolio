import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const HeaderComp = styled.header`
  height: 9rem;
  width: 100%;
  position: fixed;
  background-color: hsl(0, 0%, 9%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  /* box-shadow: 0px 0px 15px 8px rsgba(44, 44, 44, 0.086); */

  .btnClass {
    background-color: white;
    border-radius: 14px;
    color: black;
    padding: 10px;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    border: none;
    cursor: pointer;
  }
`;

export const ContainerElements = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 20px 30px 20px 60px;
  /* background-color: red; */
`;

export const Element = styled.div`
  color: ${(props) => props.color || "white"};
`;

export const LogoBox = styled.div`
  height: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: blue; */
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 19rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  /* background-color: blue; */
`;

// export const SingBtns = styled.button`
//   height: 2.6rem;
//   width: 6.1rem;
//   border-radius: 14px;
//   cursor: pointer;
//   border: none;
//   background-color: ${(props) => props.bgColor || "black"};
//   color: ${(props) => props.color || "white"};
//   transition: background-color 0.5s ease, box-shadow 0.3s ease;
//   padding: 2px;
//   margin: 5px;

//   &:hover {
//     box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
//   }
// `;

// ----------------------

export const TestContainer = styled.div`
  height: 100vh;
  /* width: 100vw; */
  background-color: grey;
`;

export const NavbarCollapse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Container navbar
export const NavbarNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 20px 30px 20px 60px;
  background-color: black;
`;

// Elementos da navbar
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  &.active > a {
    color: #6c757d;
  }
  &.disabled > a {
    color: #6c757d;
    pointer-events: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0.5rem 1rem;
  &:hover {
    color: #007bff;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  text-decoration: none;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const FormInline = styled.form`
  display: flex;
  align-items: center;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;
  /* background-color: blue; */
`;

export const FormControl = styled.input`
  display: block;
  width: 30rem;
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  /* background-clip: padding-box; */
  /* border: 1px solid #ced4da; */
  border: none;
  outline: 1px solid #ced4da;
  border-radius: 6px;
  /* background-color: blue; */
`;

export const Button = styled.button`
  height: 2.6rem;
  width: 6.1rem;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.bgColor || "black"};
  color: ${(props) => props.color || "white"};
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  padding: 2px;
  margin-left: 10px;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`;
