import React, { useContext, useState, useEffect } from 'react'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Typography } from '../Typography'

export const Benefit = ({ icon, title, description }) => {
  const theme = useContext(ThemeContext)
  const [margin, setMargin] = useState({ top: '0', bottom: '0' })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth < 768
      ? setMargin({ top: '24px', bottom: '16px' })
      : setMargin({ top: '40px', bottom: '26px' })
  }, [windowWidth])

  return (
    <Container>
      <img src={icon} alt={title} />
      <Typography
        value={title}
        variant='title3'
        mt={margin.top}
        mb={margin.bottom}
      />
      <Typography value={description} variant='body2' />
    </Container>
  )
}
