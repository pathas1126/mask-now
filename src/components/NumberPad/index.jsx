/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Button } from '..'

const NumberPad = ({ popupModal }) => {
  const numbers = Array(10)
    .fill()
    .map((_, index) => index)
  return (
    <div css={style}>
      {numbers.map(number => (
        <Button key={number} variation="outline" size="medium" onClick={() => popupModal(number)}>
          {number}
        </Button>
      ))}
    </div>
  )
}

const style = css`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  grid-gap: 0.5rem;
  margin: 0 auto;
  width: 80vw;
  height: calc((80vw / 5) * 2);
`

export default NumberPad
