import styled from 'styled-components'

export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  /* gap: 50px; */
  /* padding: 0 8rem; */
  width: 100%;
  /* color: var(--whiteDefault); // mudar!!! */
  /* background-color: blue; */

  .swiper {
    width: 100%;
    max-width: 1800px;
    /* background-color: red; */
  }

  .swiper-slide {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    /* filter: grayscale(0.6); */
    background-size: cover;
    background-position: center;
    position: relative; // nao
    border-radius: 40px;
    height: 320px;
    width: 0px;
    /* overflow: visible; */

    h2 {
      color: var(--whiteDefault);
      /* font-weight: 100; */
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
      color: var(--black1); //
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
    flex-direction: column;
    justify-content: flex-end;
    /* border-radius: inherit; */
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
    bottom: -10px !important;
    /* background-color: red; */
    transform: scale(1);
  }
`

export const SlideContent = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  transition: 0.25s;
  opacity: 0;
  /* background-color: var(--black1); // retirar */
  align-self: stretch;
  padding-bottom: 70px;
  /* height: 100%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  /* height: 400px;
  width: 800px; */

  h2 {
    color: var(--whiteDefault);
    /* font-weight: 100; */
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
    background: #fff;
    border-radius: 3.125rem;
    margin: 0 auto;
    padding: 10px 26px;
    font-size: 0.9rem;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: #005baa;
  }
`
