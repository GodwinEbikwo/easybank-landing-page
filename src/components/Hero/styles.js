import styled from 'styled-components'
import DesktopImage from '../../images/bg-intro-desktop.svg'
import MobilImage from '../../images/bg-intro-mobile.svg'
import image768 from '../../images/phone-768.png'
import image576 from '../../images/phone-576.png'

export const Main = styled.main`
  display: grid;
  width: 100%;
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
  font-family: 'Public Sans', sans-serif;
  padding: 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 447px;
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
    padding: 24px;
    margin: 0;
    align-items: flex-start;

    & p,
    h2 {
      text-align: left;
    }
  }
`

export const Ilustration = styled.div`
  height: 300px;
  max-height: 776px;
  width: 100%;
  background: no-repeat center 100%/100% url(${image576}),
    no-repeat top right/100% url(${MobilImage});

  @media (min-width: 327px) {
    height: 500px;
    background: no-repeat center 0/100% url(${image576}),
      no-repeat top right/100% url(${MobilImage});
  }

  @media (min-width: 420px) {
    background: no-repeat center 100%/90% url(${image576}),
      no-repeat top right/100% url(${MobilImage});
  }
  @media (min-width: 540px) {
    background: no-repeat center 100%/90% url(${image576}),
      no-repeat bottom right/100% url(${MobilImage});
  }

  @media (min-width: 640px) {
    height: 700px;
    background: no-repeat center 100%/90% url(${image576}),
      no-repeat top right/100% url(${MobilImage});
  }

  @media (min-width: 768px) {
    background: no-repeat center 84%/100% url(${image768}),
      8% 48% url(${DesktopImage});
  }
`
