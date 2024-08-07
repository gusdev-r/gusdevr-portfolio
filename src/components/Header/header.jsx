import { useEffect, useState } from "react";
import icon_search from "../../assets/images/search-icon.png";
import logo from "../../assets/images/snug.png";
import {
  Button,
  ContainerButtons,
  ContainerElements,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Element,
  FormControl,
  FormInline,
  HeaderComp,
  Icon,
  Logo,
  LogoBox,
} from "./style";

export const Header = () => {
  const [searchContent, setSearchContent] = useState("");

  const handleSearch = () => {
    // logic to work with the search state if this is used by you
    // eslint-disable-next-line no-unused-expressions
    searchContent;
  };

  const handleChange = (event) => {
    setSearchContent(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleControllHeader = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const scrollDifference = scrollPosition - prevScrollPos;
      if (scrollDifference > 0 && scrollPosition > 5.5 * 16) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setPrevScrollPos(scrollPosition);
    };

    window.addEventListener("scroll", handleControllHeader);

    return () => {
      window.removeEventListener("scroll", handleControllHeader);
    };
  }, [prevScrollPos]);

  return (
    <HeaderComp
      style={{
        transform: showHeader ? "translateY(0)" : "translateY(-60%)",
      }}
    >
      <LogoBox>
        <Logo src={logo} alt="logo" />
      </LogoBox>
      <ContainerElements>
        <FormInline>
          <FormControl
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {/* <Icon onClick={handleSearch} src={icon_search} alt="search-icon" /> */}
        </FormInline>
        <Element>Link 1</Element>
        <Element>Link 2</Element>
        <Dropdown>
          <Element role="button">Options</Element>
          <DropdownMenu>
            <DropdownItem href="#">Ação 1</DropdownItem>
            <DropdownItem href="#">Ação 2</DropdownItem>
            <DropdownItem href="#">Ação 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ContainerButtons>
          <Button
            type="button"
            onClick={() => {}}
            bgColorHover="#dbdbdb"
            colorHover="#222222"
          >
            Cadastrar
          </Button>
          <Button
            type="button"
            onClick={() => {}}
            bgColorHover="#dbdbdb"
            colorHover="#222222"
          >
            Login
          </Button>
        </ContainerButtons>
      </ContainerElements>
    </HeaderComp>
  );
};
