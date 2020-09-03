import React, { useState, useContext, useEffect } from 'react'
import Logo from '../../images/logo.svg'
import { Container, NavBar, Overlay } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Spin as HamburgerMenu } from 'hamburger-react'
import { ThemeContext } from 'styled-components'
import { Button } from '../Button'

export const AppBar = () => {
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState(false)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth > 1024 ? setShowMenu(true) : setShowMenu(false)
  }, [windowWidth])

  return (
    <Container>
      <img src={Logo} alt='Logo' />

      <Overlay visible={showMenu} theme={theme}>
        <NavBar theme={theme}>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
          <a href='#blog'>Blog</a>
          <a href='#careers'>Careers</a>
        </NavBar>
      </Overlay>

      {windowWidth >= 1124 && <Button theme={theme}> Request Invite </Button>}

      {windowWidth < 1024 && (
        <HamburgerMenu
          toggled={showMenu}
          toggle={setShowMenu}
          size={18}
          color={theme.primaryText}
        />
      )}
    </Container>
  )
}
