/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '.'

export default {
  component: Header,
  title: 'Components|Header',
}

export const Default = () => (
  <Router>
    <Header></Header>
  </Router>
)
