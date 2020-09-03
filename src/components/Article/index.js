import React from 'react'
import { Typography } from '../Typography'
import { Card, TextContainer, ImageContainer } from './styles'

export const Article = ({ image, caption, title, description }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <TextContainer>
        <Typography value={caption} variant='caption' />
        <Typography mt='8px' mb='8px' value={title} variant='title4' />
        <Typography value={description} variant='body3' />
      </TextContainer>
    </Card>
  )
}
