import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { Container, NavBar, CTAButton, HamburgerMenu, Overlay } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export const AppBar = () => {
  const [isOpen, setOpen] = useState(false)
  const windowWidth = useWindowWidth()

  console.log(windowWidth)
  return (
    <Container>
      <img src={Logo} alt='Logo' />

      <Overlay>
        <NavBar>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Blog</a>
          <a href='#'>Careers</a>
        </NavBar>
      </Overlay>

      <CTAButton> Request Invite </CTAButton>

      {windowWidth < 1024 && (
        <HamburgerMenu
          toggled={isOpen}
          toggle={setOpen}
          size={18}
          color='#2D314D'
        />
      )}
    </Container>
  )
}
