/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from '.'

export default {
  component: Navigation,
  title: 'Components|Navigation',
}

export const Default = () => (
  <Router>
    <Navigation></Navigation>
  </Router>
)
