import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { MdCorporateFare } from 'react-icons/md'
import styled from 'styled-components'
import { StyledSmallSubTitle } from '../../../../components/mainTexts/descText/desc'
import { StyledMediumSubTitle } from '../../../../components/mainTexts/mediumBoldText/medium'

export const ProjBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 18em;
  width: 42rem;
  align-items: center;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;
  border: 2px solid var(--grey1);

  #hadleIcons {
    display: flex;
    justify-content: flex-end;
    width: 26rem;
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
    box-shadow: 0 0 25px 0px rgba(66, 66, 66, 0.546);
    svg {
      color: var(--grey7);
    }
  }
`

const GeneralBoxProject = ({
  title,
  subtitle,
  sideTitle,
  sideSubtile,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  projectLink,
}) => {
  const [changeSide, setChangeSide] = useState(false)

  const toggleChangeSide = () => {
    setChangeSide(!changeSide)

    setTimeout(() => {
      setChangeSide(false)
    }, 10000)
  }

  return (
    <ProjBox onClick={toggleChangeSide}>
      <div id="handleSideIcons">
        {sideTitle === 'Projeto no Github' && changeSide ? (
          <FaGithub />
        ) : (
          <>{changeSide ? <MdCorporateFare /> : <></>}</>
        )}
      </div>
      <StyledMediumSubTitle
        fontSize="1.2rem"
        color="var(--grey6)"
        width="70%"
        textAling={changeSide ? 'center' : 'left'}
      >
        {changeSide ? sideTitle : title}
      </StyledMediumSubTitle>
      <StyledSmallSubTitle
        width="70%"
        textAling={changeSide ? 'center' : 'left'}
      >
        {changeSide ? sideSubtile : subtitle}
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
      {sideTitle === 'Projeto no Github' && changeSide ? (
        <StyledSmallSubTitle
          onClick={() => {
            window.open({ projectLink }, '_blank')
          }}
          textAling="center"
          color="var(--grey7)"
          fontSize="0.8rem"
        >
          Clique para acessar o projeto
        </StyledSmallSubTitle>
      ) : (
        <></>
      )}
    </ProjBox>
  )
}

export default GeneralBoxProject
