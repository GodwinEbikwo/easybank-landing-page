import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Title,
  Title2,
  Title3,
  Title4,
  Body,
  Body2,
  Body3,
  Caption
} from './styles'
import { ThemeContext } from 'styled-components'

export const Typography = ({ value, color, variant, mt, mb }) => {
  const theme = useContext(ThemeContext)

  switch (variant.toLowerCase()) {
    case 'title':
      return (
        <Title mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Title>
      )

    case 'title2':
      return (
        <Title2 mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Title2>
      )

    case 'title3':
      return (
        <Title3 mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Title3>
      )

    case 'title4':
      return (
        <Title4 mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Title4>
      )

    case 'body':
      return (
        <Body mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Body>
      )

    case 'body2':
      return (
        <Body2 mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Body2>
      )

    case 'body3':
      return (
        <Body3 mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Body3>
      )

    case 'caption':
      return (
        <Caption mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Caption>
      )

    default:
      return (
        <Body mt={mt} mb={mb} theme={theme} color={color}>
          {value}
        </Body>
      )
  }
}

//title | title2 |title3 | body | body2 | caption
Typography.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string
}
