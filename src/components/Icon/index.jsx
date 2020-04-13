/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as icons from '../../assets/icons'

const Icon = ({ shape, color = 'currentColor', size = '1rem' }) => {
  const SVGIcon = icons[shape]
  return <SVGIcon css={{ fill: color, width: size, height: 'auto' }} />
}

export default Icon
