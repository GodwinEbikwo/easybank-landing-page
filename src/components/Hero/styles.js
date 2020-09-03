import styled from 'styled-components'
import DesktopImage from '../../images/bg-intro-desktop.svg'
import MobilImage from '../../images/bg-intro-mobile.svg'

export const Main = styled.main`
  display: grid;
  width: 100vw;
  height: auto;
  align-items: start;
  justify-content: center;
  grid-template-areas:
    'imageContainer'
    'textContainer';
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'textContainer imageContainer';
  }
`

export const TextContainer = styled.div`
  grid-area: textContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 447px;
  @media (min-width: 768px) {
    max-width: 647px;
    margin: 0;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0;
    padding-left: 165px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 282px;
  background: no-repeat right top/100% 100% url(${MobilImage});
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    width: 100%;
    top: -40%;
    object-fit: fit;
  }

  @media (min-width: 334px) {
    height: 400px;

    img {
      width: 90%;
      top: -20%;
    }
  }

  @media (min-width: 450px) {
    height: 600px;
  }

  @media (min-width: 678px) {
    img {
      top: -35%;
    }
  }

  @media (min-width: 768px) {
    height: 600px;
    background: no-repeat 8% 57% url(${DesktopImage});
    background-size: fill;
    display: block;

    img {
      background-size: auto;
      top: -5%;
      right: -10%;
    }
  }

  @media (min-width: 894px) {
    background-size: none;

    background-position: left 57%;
    img {
      top: -5%;
    }
  }

  @media (min-width: 894px) {
    background-position: left 87%;
  }

  @media (min-width: 1200px) {
    img {
      right: -10%;
      top: -20%;
      max-width: 680px;
    }
  }
`
