import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: #FAFAFA;
    overflow-x: hidden;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
      text-decoration: none;
  }
`
