import React from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import { AppBar } from './components/AppBar'
import { Hero } from './components/Hero'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <AppBar />
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App
