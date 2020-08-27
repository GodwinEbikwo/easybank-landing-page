import styled from 'styled-components'

export const Container = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  padding: 0 24px;

  justify-content: space-between;
  align-items: center;
  font-family: 'Public Sans', sans-serif;
  position: relative;

  @media (min-width: 1024px) {
    height: 80px;
    padding: 0 165px;
  }
`

export const Overlay = styled.div`
  transition: all 1s ease;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    #2d314d 0%,
    rgba(45, 49, 77, 0.0001) 100%
  );

  @media (min-width: 1024px) {
    background: #fff;
    height: 80px;
    position: static;
  }
`

export const NavBar = styled.nav`
  background: #fff;
  border-radius: 4px;
  margin: 24px;
  width: 100%;
  padding: 32px 0px;
  @media (min-width: 1024px) {
    margin: 0;
    width: auto;
    padding: 0;
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
        bottom: -20px;
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

  @media (min-width: 1240px) {
    display: block;
  }
`
