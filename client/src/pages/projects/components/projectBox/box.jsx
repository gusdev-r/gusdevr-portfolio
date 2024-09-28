import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { MdCorporateFare } from 'react-icons/md'
import styled from 'styled-components'

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

export const StyledBigTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '5rem'};
  max-width: 70rem;
  text-align: ${({ textAling }) => textAling || 'left'};
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.2;
  padding-bottom: 1rem;
  width: ${({ width }) => width || '70%'};
`

export const StyledSmallSubTitle = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAling }) => textAling || 'left'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: 1.5;
  width: ${({ width }) => width || '70%'};
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
}) => {
  const [changeSide, setChangeSide] = useState(false)

  const toggleChangeSide = () => {
    setChangeSide(!changeSide)

    setTimeout(() => {
      setChangeSide(false)
    }, 6000)
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
      <StyledBigTitle
        fontSize="1.2rem"
        color="var(--grey6)"
        textAling={changeSide ? 'center' : 'left'}
      >
        {changeSide ? sideTitle : title}
      </StyledBigTitle>
      <StyledSmallSubTitle textAling={changeSide ? 'center' : 'left'}>
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
    </ProjBox>
  )
}

export default GeneralBoxProject
