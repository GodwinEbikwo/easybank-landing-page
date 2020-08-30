import styled from 'styled-components'
import DesktopImage from '../../images/bg-intro-desktop.svg'
import MobilImage from '../../images/bg-intro-mobile.svg'

export const Main = styled.main`
  display: grid;
  width: 100%;
  height: auto;
  align-items: start;

  grid-template-areas:
    'imageContainer'
    'textContainer';
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 656px;
    grid-template-areas: 'textContainer imageContainer';
  }
`

export const TextContainer = styled.div`
  grid-area: textContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Public Sans', sans-serif;
  padding: 24px;
  margin: 0;
  width: 100%;

  & h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 300;
    color: ${({ theme }) => theme.primaryText};
  }

  & p {
    text-align: center;
    margin: 24px 0 36px 0;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.secondaryText};
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 447px;
    margin-left: 165px;
    margin-right: 100px;
  }
`

export const ImageContainer = styled.div`
  grid-area: imageContainer;
  height: 282px;
  width: 100%;
  padding: 0;
  margin: 0;
  background: no-repeat right top/100% 100% url(${MobilImage});
  & picture {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  & img {
    position: absolute;
    width: 90%;
    bottom: 40px;
    object-fit: contain;
  }

  @media (min-width: 400px) and (max-width: 588px) {
    & img {
      width: 90%;
      height: 402px;
      bottom: 25px;
    }
  }

  @media (min-width: 588px) {
    height: 500px;

    & img {
      width: 90%;
      bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    height: 656px;
    background: no-repeat url(${DesktopImage});

    & img {
    }
  }
`
