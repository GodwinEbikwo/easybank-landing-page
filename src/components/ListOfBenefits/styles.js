import styled from 'styled-components'

export const Container = styled.section`
  margin: 88px 0;
  width: 100%;
  background: ${({ theme }) => theme.backgroundDark};
`

export const Wrapper = styled.div`
  padding: 64px 24px;
  @media (min-width: 1024px) {
    padding: 96px 165px;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  max-width: 635px;
`

export const Benefits = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`
