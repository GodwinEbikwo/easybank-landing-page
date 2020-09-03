import styled from 'styled-components'

export const CtaButton = styled.button`
  background: ${({ theme }) => theme.degradedGreen};
  border-radius: 22px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  width: 163px;
  height: 44px;
  line-height: 28px;
  outline: none;
  position: relative;
  transition: all 1s linear;

  &:hover:after {
    border-radius: 22px;
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
  }
`
