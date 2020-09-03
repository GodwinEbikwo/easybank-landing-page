import React from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import { AppBar } from './components/AppBar'
import { Hero } from './components/Hero'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import styled from 'styled-components'
import { ListOfBenefits } from './components/ListOfBenefits'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <AppBar />
        <Hero />
        <ListOfBenefits />
      </Container>
    </ThemeProvider>
  )
}

export default App
