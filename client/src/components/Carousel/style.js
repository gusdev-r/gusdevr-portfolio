import styled from 'styled-components'

export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 26rem;
  /* background-color: purple; // tirar */

  .swiper {
    width: 100%;
    max-width: 1800px;
    height: 350px;
  }

  .swiper-slide {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background-size: cover;
    background-position: center;
    border-radius: 40px;
    height: 320px;
    width: 0px;

    h2 {
      color: var(--whiteDefault);
      font-size: 20px;
      line-height: 1.4;
      margin-bottom: 0.625rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      color: var(--grey4);
      font-weight: 500;
      background: var(--whiteDefault);
      border-radius: 3.125rem;
      margin: 0 auto;
      padding: 10px 26px;
      font-size: 0.9rem;
      transition: 0.3s ease-in-out;
    }

    a:hover {
      color: var(--black1);
    }
  }

  .swiper-slide div {
    position: absolute;
    z-index: 1;
    inset: 0;
    transition: 0.25s;
    opacity: 0;
    align-self: stretch;
    padding-bottom: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .swiper-slide-active div {
    opacity: 1;
  }

  .swiper-slide > div > div {
    translate: 0 100px;
    transition: 0.3;
  }

  .swiper-slide-active > div > div {
    translate: 0;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background: var(--greyDefault) !important;
  }

  .swiper-pagination {
    bottom: 2px !important;
    transform: scale(1);
  }
`

export const SlideContent = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  transition: 0.25s;
  opacity: 0;
  align-self: stretch;
  padding-bottom: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`
