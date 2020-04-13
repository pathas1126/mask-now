/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Modal from '.'

export default {
  title: 'Components|Modal',
  component: Modal,
}

export const Default = () => <Modal />

export const withButton = () => {
  return (
    <Modal>
      <div css={container}>
        <h2>
          <span role="img" aria-label="emoji">
            👏
          </span>
          공지사항
        </h2>
        <p>
          <span role="img" aria-label="emoji">
            📇
          </span>
          재고 현황은 5~10분 주기로 업데이트되며, 실제와 다를 수 있습니다.
        </p>

        <p>
          <span role="img" aria-label="emoji">
            😷
          </span>
          마스크 구매 시 신분증을 반드시 지참하셔야 합니다.
        </p>
        <p>
          <span role="img" aria-label="emoji">
            💸
          </span>
          공적 마스크는 1인당 2매까지 구매 가능하며 하나당 가격은 1,500원입니다.
        </p>
        <div css={buttonContainer}>
          <span>오늘 그만 보기</span>
        </div>
      </div>
    </Modal>
  )
}

const container = () => css`
  margin: 0 auto;
  padding: 3px;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 19px;
  }

  & > p > span {
    margin-right: 5px;
  }
`

const buttonContainer = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > span {
    cursor: pointer;
    font-size: 18px;
    margin: 0;
    margin-right: 5px;
    border-bottom: 2px solid #bcbcbc;
    color: black;
    font-weight: bold;
  }
`
