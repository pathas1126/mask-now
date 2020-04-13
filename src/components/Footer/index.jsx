/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

const Footer = ({ color }) => {
  const [backAndForth, setbackAndForth] = useState(false)
  const backAndForthRef = useRef()

  useEffect(() => {
    const backAndForthCurrent = backAndForthRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.3) {
          setbackAndForth(true)
        } else {
          setbackAndForth(false)
        }
      })
    })
    if (backAndForthCurrent) {
      observer.observe(backAndForthCurrent)
    }
    return () => observer.unobserve(backAndForthCurrent)
  }, [])

  return (
    <Fragment>
      <footer css={setStyle(color)}>
        <p>
          Copyright © <a href="https://github.com/suos3147">YuJin Kim</a>,{' '}
          <a href="https://github.com/pathas1126">JunHong Min</a>,{' '}
          <a href="https://github.com/joabyjoa">EunJin Kim</a> All rights reserved.
        </p>
      </footer>
      <div ref={backAndForthRef} css={backAndForth && boxShadow}></div>
    </Fragment>
  )
}

const boxShadow = css`
  position: absolute;
  width: 10%;
  height: 10px;
  bottom: 0px;
  z-index: 10;
  border-top: 1.3px solid rgba(255, 255, 255, 0.8);
  animation: backAndForth 1.8s ease-in-out infinite;
  @keyframes backAndForth {
    0% {
      right: 90%;
    }
    50% {
      right: 0;
      border-color: rgba(255, 255, 255, 0.9);
    }
    100% {
      right: 90%;
    }
  }
`

const setStyle = color => {
  return css`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
