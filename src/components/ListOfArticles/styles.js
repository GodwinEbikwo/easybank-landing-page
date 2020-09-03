import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Wrapper = styled.div`
  padding: 0 24px;
  @media (min-width: 1024px) {
    padding: 0 165px;
  }
`

export const ArticlesContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`
