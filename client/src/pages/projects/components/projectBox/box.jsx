import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";
import styled from "styled-components";
import { StyledSmallSubTitle } from "../../../../components/mainTexts/descText/desc";
import { StyledMediumSubTitle } from "../../../../components/mainTexts/mediumBoldText/medium";
import breakpoint from "../../../../styles/breakpoints";

export const ProjBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 22rem;
  width: 42rem;
  align-items: center;
  border-radius: 2rem;
  transition: all 1.2s ease;
  border: 2px solid var(--grey1);
  cursor: pointer;

  #hadleIcons {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    font-size: 1.6rem;
    color: var(--grey7);
    gap: 0.8rem;
    padding: 1rem;
  }

  #handleSideIcons {
    font-size: 3.5rem;
    color: var(--grey6);
  }

  &:hover {
    box-shadow: 0 0 0.8rem 0px rgba(66, 66, 66, 0.546);
    border: 2px solid var(--grey2);
    svg {
      color: var(--grey7);
    }
  }
  @media ${breakpoint.bg1} {
    width: 34rem;
    height: 24rem;
  }
  @media ${breakpoint.sm0} {
    height: 16rem;
    width: 28rem;
  }
  @media ${breakpoint.mob1} {
    width: 22rem;
    height: 20rem;
    border-radius: 1.5rem;
    svg {
      font-size: 1.4rem;
    }
  }
`;

const GeneralBoxProject = ({
  title,
  subtitle,
  sideTitle,
  sideSubtitle,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  projectLink,
}) => {
  const [changeSide, setChangeSide] = useState(false);

  const toggleChangeSide = () => {
    setChangeSide(!changeSide);

    setTimeout(() => {
      setChangeSide(false);
    }, 10000);
  };

  const verifyContent = (content, substitute) => {
    if (content) return content;
    return substitute;
  };

  return (
    <ProjBox onClick={toggleChangeSide}>
      <div id="handleSideIcons">
        {verifyContent(sideTitle, "Ambiente corporativo") ===
          "Projeto no Github" && changeSide ? (
          <FaGithub />
        ) : (
          <>{changeSide ? <MdCorporateFare /> : <></>}</>
        )}
      </div>
      <StyledMediumSubTitle
        fontSize="1.1rem"
        paddingBottom="0.65rem"
        color="var(--grey6)"
        width="80%"
        textAlign={changeSide ? "center" : "left"}
      >
        {changeSide ? verifyContent(sideTitle, "Ambiente corporativo") : title}
      </StyledMediumSubTitle>
      <StyledSmallSubTitle
        width="80%"
        textAlign={changeSide ? "center" : "left"}
      >
        {changeSide
          ? verifyContent(
              sideSubtitle,
              "Este projeto foi desenvolvido em ambiente comporativo, não é possível compartilhar.",
            )
          : subtitle}
      </StyledSmallSubTitle>
      {changeSide ? (
        <></>
      ) : (
        <div id="hadleIcons">
          {i1}
          {i2}
          {i3}
          {i4}
          {i5}
          {i6}
        </div>
      )}
      {sideTitle === "Projeto no Github" && changeSide ? (
        <StyledSmallSubTitle
          onClick={() => {
            window.open(projectLink, "_blank");
          }}
          textAlign="center"
          color="var(--grey7)"
        >
          Clique para acessar o projeto
        </StyledSmallSubTitle>
      ) : (
        <></>
      )}
    </ProjBox>
  );
};

export default GeneralBoxProject;
