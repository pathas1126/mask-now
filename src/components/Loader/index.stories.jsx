/** @jsx jsx */
import { jsx } from '@emotion/core'
import Loader from '.'

export default {
  title: 'Components|Loader',
  component: Loader,
}

export const Default = () => {
  return <Loader />
}

export const Secondary = () => {
  return <Loader borderColor="secondary" fontColor="secondary" />
}

export const Hover = () => {
  return <Loader borderColor="primary" fontColor="secondary" />
}
