import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 80px;
  width: 100%;
  background: ${({ theme }) => theme.primaryText};
`

export const Wrapper = styled.div`
  padding: 40px 78px;
  display: grid;
  grid-template-areas:
    'logoContainer'
    'navContainer'
    'ButtonContainer';

  grid-template-columns: 1fr;
  grid-gap: 32px;

  @media (min-width: 768px) {
    grid-template-areas: 'logoContainer navContainer ButtonContainer';
    grid-template-columns: repeat(3, 1fr);
    padding: 40px 24px;
  }

  @media (min-width: 1024px) {
    padding: 48px 165px;
  }
`

export const LogoContainer = styled.div`
  grid-area: logoContainer;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const SocialContainer = styled.nav`
  margin-top: 32px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, min-content);
  grid-gap: 16px;

  @media (min-width: 768px) {
    justify-content: start;
  }

  & a:hover {
    color: ${({ theme }) => theme.green};
  }
`

export const NavContainer = styled.nav`
  grid-area: navContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    display: block;
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: -0.234375px;
    color: #ffffff;
    margin-bottom: 8px;
    text-align: center;
    &:hover {
      color: ${({ theme }) => theme.green};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;

    & a {
      text-align: left;
    }
  }
`

export const ButtonContainer = styled.div`
  grid-area: ButtonContainer;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  & em {
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.234375px;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
    margin-top: 24px;
  }
`
