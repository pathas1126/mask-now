/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Navigation } from '..'
import COLORS from '../../assets/colors'

const Header = () => {
  return (
    <header css={style}>
      <span role="img" aria-label="Mask">
        😷
      </span>
      <h1>Mask Now</h1>

      <Navigation></Navigation>
    </header>
  )
}

const style = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 3.5rem;
  background: #fff;
  z-index: 10;
  span {
    font-size: 2rem;
  }
  h1 {
    margin-left: 0.5rem;
    margin-right: auto;
    background-color: ${COLORS.primary};
    background-image: linear-gradient(45deg, ${COLORS.primary}, ${COLORS.plenty});
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-transform: uppercase;
  }
`

export default Header
