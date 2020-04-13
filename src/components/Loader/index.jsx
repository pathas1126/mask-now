/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const Loader = ({ borderColor = 'primary', fontColor = 'primary' }) => {
  return (
    <div css={style(borderColor, fontColor)}>
      <div></div>
      <div>LOADING</div>
    </div>
  )
}

const style = (borderColor, fontColor) => css`
  margin: auto;
  &,
  div {
    position: relative;
    padding: 0;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    box-sizing: border-box;
  }
  & > div:first-of-type {
    border: 3px solid transparent;
    border-color: transparent ${COLORS[borderColor]};
    animation: rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
  }
  & > div + div {
    position: absolute;
    top: 54px;
    text-align: center;
    font-size: 15px;
    color: ${COLORS[fontColor]};
    opacity: 0;
    animation: loading-text-opacity 2s linear 0s infinite normal;
  }
  &:hover div:first-of-type {
    border-color: transparent ${COLORS[fontColor]};
  }
  &:hover > &,
  & div {
    transition: all 0.5s ease-in-out;
  }

  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-text-opacity {
    0% {
      opacity: 0.4;
    }
    25% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`

export default Loader
