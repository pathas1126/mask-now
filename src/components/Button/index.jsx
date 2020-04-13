/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import COLORS from '../../assets/colors'

const Button = ({
  children,
  variation = 'basic',
  color = 'primary',
  size = 'small',
  width = 'auto',
  disable = false,
  onClick,
}) => {
  return (
    <button
      css={setStyle({ variation, color, size, width })}
      disabled={disable}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

const setStyle = ({ variation, size, color, width }) => {
  const COLOR = COLORS[color]

  const defaultStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${COLOR};
    border-radius: 0.2rem;
    font-size: 1rem;
    outline: none;
    &:active {
      transform: scale(0.99);
      transition: 0.5s;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  `

  const styles = {
    basic: css`
      color: #fff;
      background: ${COLOR};
    `,
    outline: css`
      color: ${COLOR};
      background: none;
      &:active {
        background: ${COLOR};
        color: #fff;
      }
    `,
    flat: css`
      border: none;
      text-align: center;
      color: ${COLOR};
      background: none;
    `,
  }

  const sizes = {
    small: css`
      padding: 0.3rem 0.7rem;
    `,
    medium: css`
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
    `,
    large: css`
      padding: 0.7rem 1.2rem;
      font-size: 2rem;
    `,
  }

  return [defaultStyle, styles[variation], sizes[size], { width }]
}

export default Button
