/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Input = ({ onChange, onEnter, placeholder, inputRef }) => {
  return (
    <input
      css={style}
      type="text"
      onChange={onChange}
      onKeyUp={onEnter}
      placeholder={placeholder}
      ref={inputRef}
    />
  )
}

const style = css`
  width: 30%;
  height: 40px;
  margin-right: 6px;
  font-size: 16px;
  border-style: none;
  outline: none;
  border-bottom: 2px solid #bcbcbc;
  transition: ease 0.3s;
  &:focus {
    transform: scale(1.01);
    font-size: 17px;
    border-bottom: 2px solid #ababab;
  }
`

export default Input
