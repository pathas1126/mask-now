/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Button from '.'

export default {
  title: 'Components|Button',
  component: Button,
}

export const Default = () => {
  return <Button>Button</Button>
}

export const variations = () => {
  return (
    <section css={container}>
      <article>
        <h4 className="description">basic</h4>
        <Button>Button</Button>
      </article>
      <article>
        <h4 className="description">outline</h4>
        <Button variation="outline">Button</Button>
      </article>
      <article>
        <h4 className="description">flat</h4>
        <Button variation="flat">Button</Button>
      </article>
    </section>
  )
}

export const colors = () => {
  return (
    <section css={container}>
      <article>
        <h4 className="description">primary</h4>
        <Button>Button</Button>
        <Button variation="outline">Button</Button>
        <Button variation="flat">Button</Button>
      </article>
      <article>
        <h4 className="description">default</h4>
        <Button color="default">Button</Button>
        <Button variation="outline" color="default">
          Button
        </Button>
        <Button variation="flat" color="default">
          Button
        </Button>
      </article>
    </section>
  )
}

export const disable = () => {
  return (
    <section css={container}>
      <Button disable={true}>Button</Button>
      <Button variation="outline" disable={true}>
        Button
      </Button>
      <Button variation="flat" disable={true}>
        Button
      </Button>
    </section>
  )
}

export const sizes = () => {
  return (
    <section css={container}>
      <article>
        <h4 className="description">small</h4>
        <Button size="small">Button</Button>
        <Button size="small" variation="outline">
          Button
        </Button>
        <Button size="small" variation="flat">
          Button
        </Button>
      </article>
      <article>
        <h4 className="description">medium</h4>
        <Button size="medium">Button</Button>
        <Button size="medium" variation="outline">
          Button
        </Button>
        <Button size="medium" variation="flat">
          Button
        </Button>
      </article>
      <article>
        <h4 className="description">large</h4>
        <Button size="large">Button</Button>
        <Button size="large" variation="outline">
          Button
        </Button>
        <Button size="large" variation="flat">
          Button
        </Button>
      </article>
    </section>
  )
}

const container = css`
  .description {
    margin: 0 0 0.3rem;
    text-transform: capitalize;
  }
  article ~ article {
    margin-top: 2.5rem;
  }
  button ~ button {
    margin-left: 0.5rem;
  }
`
