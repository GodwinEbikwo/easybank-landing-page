import styled from 'styled-components'

export const Card = styled.article`
  background: #fff;
  border-radius: 5px;
`

export const TextContainer = styled.div`
  padding: 24px;
`

export const ImageContainer = styled.figure`
  width: 100%;
  & > img {
    border-radius: 5px 5px 0px 0px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`
