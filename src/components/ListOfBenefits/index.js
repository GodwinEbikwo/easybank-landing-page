import React, { useContext, useEffect, useState } from 'react'
import { benefits } from '../../data/benefits'
import { Benefit } from '../Benefit'
import { ThemeContext } from 'styled-components'
import { Container, Wrapper, TextContainer, Benefits } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Typography } from '../Typography'

export const ListOfBenefits = () => {
  const theme = useContext(ThemeContext)
  const [margin, setMargin] = useState({ top: '0', bottom: '0' })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth < 768
      ? setMargin({ top: '46px', bottom: '56px' })
      : setMargin({ top: '16px', bottom: '72px' })
  }, [windowWidth])

  return (
    <Container theme={theme}>
      <Wrapper>
        <TextContainer>
          <Typography
            value='Why choose Easybank?'
            theme={theme}
            variant='title2'
          />

          <Typography
            mt={margin.top}
            mb={margin.bottom}
            value='We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.'
            theme={theme}
            variant='body'
          />
        </TextContainer>

        <Benefits>
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </Benefits>
      </Wrapper>
    </Container>
  )
}
