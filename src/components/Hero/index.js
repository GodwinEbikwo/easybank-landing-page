import React, { useContext, useEffect, useState } from 'react'
import { Main, TextContainer, ImageContainer } from './styles'
import { ThemeContext } from 'styled-components'
import { Typography } from '../Typography'
import { Button } from '../Button'
import image768 from '../../images/phone-768.png'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export const Hero = () => {
  const theme = useContext(ThemeContext)
  const [margin, setMargin] = useState({ top: '0', bottom: '0' })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth < 768
      ? setMargin({ top: '2px', bottom: '32px' })
      : setMargin({ top: '24px', bottom: '36px' })
  }, [windowWidth])

  return (
    <Main>
      <TextContainer theme={theme}>
        <Typography value='Next generation digital banking' variant='title' />
        <Typography
          mt={margin.top}
          mb={margin.bottom}
          variant='body'
          value='Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.'
        />
        <Button />
      </TextContainer>

      <ImageContainer>
        <img src={image768} alt='Phone' />
      </ImageContainer>
    </Main>
  )
}
