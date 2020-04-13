/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'
import { useEffect, useState, useCallback } from 'react'

const Footer = ({ color }) => {
  const [shadow, setShadow] = useState(false)
  const { documentElement } = document

  const shadowEvent = useCallback(() => {
    if (documentElement.scrollHeight === documentElement.clientHeight + documentElement.scrollTop) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }, [documentElement.clientHeight, documentElement.scrollHeight, documentElement.scrollTop])

  useEffect(() => {
    window.addEventListener('scroll', shadowEvent)
    return () => window.removeEventListener('scroll', shadowEvent)
  }, [shadowEvent])

  return (
    <Fragment>
      <footer css={setStyle(color)}>
        <div></div>
        <p>
          Copyright © <a href="https://github.com/suos3147">YuJin Kim</a>,{' '}
          <a href="https://github.com/pathas1126">JunHong Min</a>,{' '}
          <a href="https://github.com/joabyjoa">EunJin Kim</a> All rights reserved.
        </p>
      </footer>
      <div css={shadow && boxShadow}></div>
    </Fragment>
  )
}

const boxShadow = css`
  width: 100%;
  height: 3px;
  bottom: 50px;
  position: absolute;
  z-index: 10;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.32), 0px -3px 4px 1px rgba(30, 144, 255, 0.45);
  transition: 0.1s ease-out;
`

const setStyle = color => {
  return css`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 53px;
    background: ${COLORS[color]};
    padding: 15px;
    text-align: center;
    color: white;
    & a {
      text-decoration: none;
      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
      &:active {
        color: rgba(255, 235, 59, 1);
      }
    }
  `
}

export default Footer
