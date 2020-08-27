import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { Container, NavBar, CTAButton, Overlay } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Spin as HamburgerMenu } from 'hamburger-react'

export const AppBar = () => {
  const [isOpen, setOpen] = useState(false)
  const windowWidth = useWindowWidth()

  React.useEffect(() => {
    windowWidth > 1024 ? setOpen(true) : setOpen(false)
  }, [windowWidth])

  return (
    <Container>
      <img src={Logo} alt='Logo' />

      <Overlay visible={isOpen}>
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
