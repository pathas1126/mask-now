/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import { Header, Footer, Typography } from '..'

const PageTemplate = ({ children, info }) => {
  return (
    <Fragment>
      <Header />
      <main css={mainStyle}>
        {info && (
          <Typography variation="callout" color="secondary" className="info">
            {info}
          </Typography>
        )}
        {children}
      </main>
      <Footer color="primary" />
    </Fragment>
  )
}

const mainStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0.5rem 0;
  height: 100vh;
  background: #fff;
  z-index: 1;

  .info {
    margin: 2rem auto;
    width: 80vw;
    text-align: center;
  }
`

export default PageTemplate
