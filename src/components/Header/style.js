import styled from "styled-components";

export const HeaderComp = styled.header`
  height: 9rem;
  width: 100%;
  position: fixed;
  background-color: hsl(0, 0%, 9%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
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
`;

export const Element = styled.a`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: ${(props) => props.color || "#6e6d6d"};
  cursor: pointer;
  transition: all ease 0.5s;
  font-size: 15px;
  &:hover {
    color: ${(props) => props.bgColorHover || "white"};
    font-size: 15.5px;
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
  top: 100%;
  left: 0;
  z-index: 1000;
  flex-direction: column;
  padding: 0.5rem 0;
  margin: 0.5rem 0 0;
  border: none;
  border-radius: 8px;
  background-color: #636363;

  ${Dropdown}:hover & {
    display: flex;
  }
`;

export const DropdownItem = styled.a`
  padding: 0.25rem 1rem;
  color: #000;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    background-color: #303030;
    color: #fff;
  }
`;

export const FormInline = styled.form`
  position: relative;
  display: block;
  width: 30rem;
  align-items: center;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 2.5rem 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
`;

export const Button = styled.button`
  height: 2.6rem;
  width: 5.7rem;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid white;
  background-color: transparent;
  color: ${(props) => props.color || "white"};

  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  padding: 2px;
  margin-left: 10px;
  &:hover {
    background-color: ${(props) => props.bgColorHover || "#8e8e8e"};
    color: ${(props) => props.colorHover || "#8e8e8e"};
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    font-weight: 700;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 28.45rem;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
