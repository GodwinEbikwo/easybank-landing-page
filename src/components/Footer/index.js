import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import logo from '../../images/logo2.svg'
import facebook from '../../images/icon-facebook.svg'
import youtube from '../../images/icon-youtube.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'
import { Button } from '../Button'
import {
  Container,
  Wrapper,
  LogoContainer,
  SocialContainer,
  ButtonContainer,
  NavContainer
} from './styles'

export const Footer = () => {
  const theme = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Wrapper>
        <LogoContainer>
          <a href='#home'>
            <img src={logo} alt='logo' />
          </a>
          <SocialContainer theme={theme}>
            <a href='https://www.facebook.com/'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href='https://www.youtube.com/'>
              <img src={youtube} alt='youtube' />
            </a>
            <a href='https://twitter.com/?lang=es'>
              <img src={twitter} alt='twitter' />
            </a>
            <a href='https://www.pinterest.es/'>
              <img src={pinterest} alt='pinterest' />
            </a>
            <a href='https://www.instagram.com/?hl=es-la'>
              <img src={instagram} alt='instagram' />
            </a>
          </SocialContainer>
        </LogoContainer>
        <NavContainer theme={theme}>
          <div>
            <a href='#about'>About Us</a>
            <a href='#Contact'>Contact</a>
            <a href='#Blog'>Blog</a>
          </div>

          <div>
            <a href='#Careers'>Careers</a>
            <a href='#Support'>Support</a>
            <a href='#Privacy'>Privacy Policy</a>
          </div>
        </NavContainer>

        <ButtonContainer>
          <Button />
          <em>© Easybank. All Rights Reserved</em>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}
