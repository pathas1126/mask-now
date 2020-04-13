/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Typography from '.'

export default {
  component: Typography,
  title: 'Components|Typography',
}

export const Default = () => (
  <Typography>
    것이다.보라, 굳세게 그것을 사랑의 얼음과 곳이 못할 약동하다. 대중을 이것을 싹이 하는 새 것은
    영락과 찬미를 것이다. 앞이 무엇을 미묘한 있으며, 영락과 꽃이 것이다. 보내는 봄바람을 보이는 우리
    있으랴? 하여도 풀이 속에서 미묘한 가는 원대하고, 평화스러운 긴지라 내려온 칼이다. 청춘은 꽃 밥을
    온갖 가장 따뜻한 있다.
  </Typography>
)

export const variations = () => {
  return (
    <section css={container}>
      <article>
        <h4 className="description">title</h4>
        <Typography variation="title">발휘하기 같지</Typography>
      </article>
      <article>
        <h4 className="description">subtitle</h4>
        <Typography variation="subtitle">같은 위하여 이상은 가는</Typography>
      </article>
      <article>
        <h4 className="description">body</h4>
        <Typography>
          발휘하기 같지 곧 갑 그들의 소리다.이것은 이상이 봄바람이다. 피부가 든 이성은 얼마나 속에서
          무엇을 설산에서 이것이다. 곧 새가 돋고, 눈이 황금시대를 아니다. 투명하되 우는 주는
          광야에서 살 듣는다.
        </Typography>
      </article>
      <article>
        <h4 className="description">quote</h4>
        <Typography variation="quote">
          창공에 위하여 가치를 천지는 얼음과 불러 우리의 힘있다. 장식하는 온갖 인생을 과실이 크고
          유소년에게서 속에 있는 황금시대다. 간에 싸인 것은 청춘의 위하여 있다. 가지에 그들의 있는
          살 않는 용감하고 몸이 아니다.
        </Typography>
      </article>
      <article>
        <h4 className="description">callout</h4>
        <Typography variation="callout">
          꽃이 길지 얼음과 가지에 뛰노는 운다. 일월과 아름답고 피부가 피가 주며, 위하여서, 거선의
          설레는 부패뿐이다. 천지는 목숨이 청춘의 인간은 우리 교향악이다.
        </Typography>
      </article>
    </section>
  )
}

export const decorations = () => {
  return (
    <section css={container}>
      <article>
        <h4 className="description">bold</h4>
        <Typography>
          <Typography decoration="bold">발휘하기</Typography> 같지 곧 갑 그들의 소리다.이것은{' '}
          <Typography decoration="bold">이상이 봄바람이다. </Typography>피부가 든 이성은 얼마나
          속에서 무엇을 설산에서 이것이다. 곧 새가 돋고, 눈이 황금시대를 아니다. 투명하되 우는 주는
          광야에서 살 듣는다.
        </Typography>
      </article>
      <article>
        <h4 className="description">highlight</h4>
        <Typography>
          <Typography decoration="highlight">내는 황금시대</Typography>를 찾아다녀도, 풀이 같으며,
          있으며, 그들은 그리하였는가? 인생에 설레는 열매를
          <Typography decoration="highlight"> 스며들어 하는 현저하게 많이</Typography> 그들의 청춘을
          싸인 쓸쓸하랴? 눈이 청춘을 가슴이 수 불러 노래하며 것이다.
        </Typography>
      </article>
      <article>
        <h4 className="description">underline</h4>
        <Typography>
          <Typography decoration="underline">눈에 행복스럽고</Typography> 불러 있는 발휘하기 따뜻한
          가치를 우는 노년에게서 보라. 수 역사를 사랑의 소리다.{' '}
          <Typography decoration="underline">살 얼음과 천고에 있음</Typography>으로써 구할 두손을
          철환하였는가? 있음으로써 피다. 그것은 사랑의 얼마나 그들은 이상, 못할 것이다.
        </Typography>
      </article>
      <article>
        <h4 className="description">italic</h4>
        <Typography>
          <Typography decoration="italic">생의 튼튼</Typography>하며, 있는 풍부하게 이상의 있다.
          그와 길을 그들은 이상의 교향악이다. 인생을 품으며, 붙잡아 그들의 그림자는 아니다. 가슴에{' '}
          <Typography decoration="italic">웅대한 천지는 풀밭에</Typography> 같이, 가슴이 같이,
          아름다우냐? 바이며, 사랑의 있음으로써 공자는 것이다.
        </Typography>
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
