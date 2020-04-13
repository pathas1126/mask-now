/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import COLORS from '../../assets/colors'

const Typography = ({
  children,
  variation = 'body',
  decoration,
  size = 'normal',
  color = 'default',
  tag,
  className,
}) => {
  const defaultTag = setDefaultTag({ variation, decoration })
  const Tag = tag || defaultTag
  return (
    <Tag css={setStyle({ variation, decoration, size, color })} className={className}>
      {children}
    </Tag>
  )
}

const setDefaultTag = ({ variation, decoration }) => {
  if (decoration) return 'span'
  switch (variation) {
    case 'title':
      return 'h3'
    case 'subtitle':
      return 'h4'
    default:
      return 'p'
  }
}

const setStyle = ({ variation, decoration, size, color }) => {
  const fontColor = COLORS[color]
  const fontSizes = { normal: 1, large: 1.5 }

  const defaultStyle = css`
    line-height: 1.6;
    font-size: ${fontSizes[size]}rem;
    font-weight: normal;
    color: ${fontColor};
  `
  const variations = {
    title: css`
      font-size: ${fontSizes[size] * 2}rem;
      font-weight: bold;
      text-transform: capitalize;
    `,
    subtitle: css`
      font-size: ${fontSizes[size] * 1.2}rem;
      font-weight: bold;
      text-transform: capitalize;
    `,
    body: css`
      &::first-letter {
        text-transform: uppercase;
      }
    `,
    quote: css`
      display: block;
      padding: 0 1rem;
      border-left: 2px solid ${COLORS['default']};
      opacity: 0.7;
      &::first-letter {
        text-transform: uppercase;
        font-size: 1.2rem;
      }
    `,
    callout: css`
      display: block;
      padding: 1rem 1.2rem;
      border-radius: 0.2rem;
      background: FloralWhite;
    `,
  }

  const decorations = {
    bold: css`
      font-weight: bold;
    `,
    highlight: css`
      background: rgba(255, 255, 0, 0.3);
    `,
    underline: css`
      text-decoration: underline;
    `,
    italic: css`
      font-style: italic;
    `,
  }

  return [defaultStyle, variations[variation], decoration && decorations[decoration]]
}

export default Typography
