import styled, { css } from 'styled-components'

const Primitive = css`
  font-style: normal;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const Title = styled.h1`
  ${Primitive}
  font-size: 40px;
  line-height: 54px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};

  @media (min-width: 1126px) {
    font-size: 56px;
    line-height: 64px;
    letter-spacing: -1px;
  }
`
export const Title2 = styled.h2`
  ${Primitive}
  font-size:  32px;
  line-height: 44px;
  letter-spacing: -0.571429px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 64px;
    letter-spacing: -0.714286px;
  }
`

export const Title3 = styled.h3`
  ${Primitive}
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.357143px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.428571px;
  }
`
export const Title4 = styled.h4`
  ${Primitive}
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.285714px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  text-align: left;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }
`

export const Body = styled.p`
  ${Primitive}
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.234375px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.28125px;
  }
`
export const Body2 = styled.p`
  ${Primitive}
  font-weight: normal;
  line-height: 25px;
  letter-spacing: -0.234375px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.25px;
  }
`

export const Body3 = styled.p`
  ${Primitive}
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.203125px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
  text-align: left;
`

export const Caption = styled.span`
  ${Primitive}
  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.15625px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
  text-align: left;
`
