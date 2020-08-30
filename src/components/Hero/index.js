import React, { useContext } from 'react'
import image768 from '../../images/phone-768.png'
import image576 from '../../images/phone-576.png'

import { Main, TextContainer, ImageContainer } from './styles'
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

      <ImageContainer>
        <picture>
          <source srcset={image768} media='(min-width: 500px)'></source>
          <img src={image576} alt='Ilustracion de telefono' />
        </picture>
      </ImageContainer>
    </Main>
  )
}
