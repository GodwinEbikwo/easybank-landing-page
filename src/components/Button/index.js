import React, { useContext } from 'react'
import { CtaButton } from './styles'
import { ThemeContext } from 'styled-components'

export const Button = () => {
  const theme = useContext(ThemeContext)

  return <CtaButton theme={theme}>Request Invite</CtaButton>
}
