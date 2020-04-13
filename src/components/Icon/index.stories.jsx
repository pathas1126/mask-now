/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Icon from '.'
import * as icons from '../../assets/icons'

export default {
  component: Icon,
  title: 'Assets|Icon',
}

export const Default = () => <Icon shape="like" />

export const shapes = () => {
  const iconNames = Object.keys(icons)
  return (
    <section css={shapeContainer}>
      {iconNames.map(name => (
        <article>
          <h4>{name}</h4>
          <Icon shape={name} />
        </article>
      ))}
    </section>
  )
}

export const sizes = () => (
  <section css={container}>
    <Icon shape="liked" />
    <Icon shape="liked" size="2rem" />
    <Icon shape="liked" size="3rem" />
  </section>
)

export const colors = () => (
  <section css={container}>
    <Icon shape="liked" color="orange" />
    <Icon shape="liked" color="orangered" />
    <Icon shape="liked" color="hotpink" />
    <Icon shape="liked" color="dodgerblue" />
    <Icon shape="liked" color="seagreen" />
  </section>
)

const shapeContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  article {
    display: flex;
    align-items: center;
    & ~ article {
      margin-top: 0.5rem;
    }
  }
  h4 {
    margin-right: 1rem;
    text-transform: capitalize;
  }
  svg {
    fill: dodgerblue;
  }
`

const container = css`
  & > * ~ * {
    margin-left: 1rem;
  }
`
