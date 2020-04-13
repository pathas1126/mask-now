/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Modal = ({ children, size = 'long', disappear }) => {
  return (
    <div css={style(size, disappear)}>
      <div>{children}</div>
    </div>
  )
}

const sizes = {
  wide: {
    width: '60%',
    height: '250px',
  },
  long: {
    width: '350px',
    height: '440px',
  },
}

const sizeStyle = size => css`
  width: ${sizes[size].width};
  height: ${sizes[size].height};
`

const style = (size, disappear) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;
  ${disappear &&
    css`
      animation-name: fadeOut;
      animation-duration: 0.3s;
      animation-timing-function: ease-in;
    `}
  & > div {
    padding-top: 45px;
    min-width: 360px;
    max-width: 390px;
    ${sizeStyle(size)};
    background: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    animation-name: popup;
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
    ${disappear &&
      css`
        animation-name: close;
        animation-duration: 0.3s;
        animation-timing-function: ease-out;
      `}
  }

  @keyframes popup {
    from {
      transform: scale(0.1) translateY(-500px);
    }
    to {
      transform: scale(1) translateY(0px);
    }
  }
  @keyframes close {
    from {
      transform: scale(1) translateY(0px);
    }
    to {
      transform: scale(0) translateY(-500px);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

export default Modal
