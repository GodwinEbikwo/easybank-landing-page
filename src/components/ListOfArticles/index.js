import React, { useEffect, useState } from 'react'
import { Container, Wrapper, ArticlesContainer } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Typography } from '../Typography'
import { articles } from '../../data/articles'
import { Article } from '../Article'

export const ListOfArticles = () => {
  const [margin, setMargin] = useState({ top: '0', bottom: '0' })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth < 768
      ? setMargin({ top: '0', bottom: '25px' })
      : setMargin({ top: '0', bottom: '40px' })
  }, [windowWidth])

  return (
    <Container>
      <Wrapper>
        <Typography
          mb={margin.bottom}
          value='Latest Articles'
          variant='title2'
        />
        <ArticlesContainer>
          {articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </ArticlesContainer>
      </Wrapper>
    </Container>
  )
}
