import styled from 'styled-components'
import Hamburger from 'hamburger-react'

export const Container = styled.header`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-areas:
    'logo hamburger'
    'overlay overlay';
  justify-content: space-between;
  align-items: center;
  font-family: 'Public Sans', sans-serif;

  & img {
    margin: 0 24px;
    grid-area: logo;
  }

  @media (min-width: 1024px) {
    height: 80px;
    grid-template-areas: 'logo overlay cta-button';
    grid-template-columns: 187px 1fr 211px;
  }
`

export const Overlay = styled.div`
  grid-area: overlay;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  @media (min-width: 1024px) {
    background: #fff;
    height: 80px;
  }
`

export const NavBar = styled.nav`
  background: #fff;
  border-radius: 4px;
  margin: 24px;
  width: 100%;
  @media (min-width: 1024px) {
    margin: 0;
    width: auto;
  }

  & a {
    display: block;
    padding: 15px 35px;
    color: #2d314d;
    font-size: 18px;
    position: relative;
    text-align: center;
    @media (min-width: 1024px) {
      padding: 0 10px;
      margin-right: 30px;
      display: inline;
      color: #9597a5;
      font-size: 14px;

      &:hover {
        color: #2d314d;
      }

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -25px;
        background: #30c88f;
        height: 4px;
      }
    }
  }
`

export const CTAButton = styled.button`
  grid-area: 'cta-button';
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  border-radius: 22px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  width: 163px;
  height: 44px;
  line-height: 28px;
  outline: none;
  position: relative;
  transition: opacity 1s linear;
  display: none;

  &:hover:after {
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`

export const HamburgerMenu = styled(Hamburger)`
  grid-area: hamburger;
`
