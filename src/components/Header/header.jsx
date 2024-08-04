import {
  HeaderComp,
  GlobalStyle,
  LogoBox,
  Logo,
  SingBtns,
  ContainerElements,
  ContainerButtons,
  Element,

  // -------
  NavbarCollapse,
  NavbarNav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  FormInline,
  FormControl,
  Button,
  TestContainer,
} from "./style";
import logo from "../../assets/images/snug.png";

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderComp>
        <LogoBox>
          <Logo src={logo} alt="logo" />
        </LogoBox>
        <ContainerElements>
          <FormInline>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button
              type="button"
              onClick={() => {}}
              bgColor="#303030"
              color="white"
            >
              Search
            </Button>
          </FormInline>
          <Element>Link 1</Element>
          <Element>Link 2</Element>
          <Element>Link 3</Element>
          <ContainerButtons>
            <Button
              type="button"
              onClick={() => {}}
              bgColor="grey"
              color="white"
            >
              Cadastrar
            </Button>
            <Button
              type="button"
              onClick={() => {}}
              bgColor="white"
              color="black"
            >
              Login
            </Button>
          </ContainerButtons>
        </ContainerElements>
      </HeaderComp>
      {/* ---- */}
      {/* <TestContainer>
        <NavbarCollapse>
          <NavbarNav>
            <NavItem className="nav-item active">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <Dropdown className="nav-item dropdown">
              <NavLink
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
              >
                Dropdown
              </NavLink> */}
      {/* <DropdownMenu>
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownItem href="#">Something else here</DropdownItem>
              </DropdownMenu> */}
      {/* </Dropdown> */}
      {/* <NavItem className="nav-item disabled">
              <NavLink href="#">Disabled</NavLink>
            </NavItem> */}
      {/* </NavbarNav>
        </NavbarCollapse>
      </TestContainer> */}
    </>
  );
};
