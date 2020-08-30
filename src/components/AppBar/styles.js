import styled from 'styled-components'

export const Container = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  padding: 0 24px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  font-family: 'Public Sans', sans-serif;
  position: relative;
  z-index: 99;

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
  background: ${({ theme }) => theme.degradedBlack};

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
    color: ${({ theme }) => theme.primaryText};
    font-size: 18px;
    position: relative;
    text-align: center;

    @media (min-width: 1024px) {
      padding: 0 10px;
      margin-right: 30px;
      display: inline;
      color: ${({ theme }) => theme.secondaryText};
      font-size: 14px;

      &:hover {
        color: ${({ theme }) => theme.primaryText};
        font-weight: 700;
      }

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -30px;
        background: ${({ theme }) => theme.green};
        height: 4px;
      }
    }
  }
`
