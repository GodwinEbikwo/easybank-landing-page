import React, { useContext } from 'react'
import { Main, TextContainer, Ilustration } from './styles'
import { ThemeContext } from 'styled-components'
import { Button } from '../Button'

export const Hero = () => {
  const theme = useContext(ThemeContext)

  return (
    <Main>
      <TextContainer theme={theme}>
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </TextContainer>

      <Ilustration />
    </Main>
  )
}
