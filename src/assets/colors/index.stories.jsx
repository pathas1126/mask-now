/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import colors from '.'

export default {
  component: colors,
  title: 'Assets|Color Palette',
}

export const Default = () => {
  const colorNames = Object.keys(colors)
  return (
    <section css={palette}>
      {colorNames.map(name => (
        <div css={{ background: colors[name] }}>{name}</div>
      ))}
    </section>
  )
}

const palette = css`
  display: flex;
  div {
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    & ~ div {
      margin-left: 1rem;
    }
  }
`
