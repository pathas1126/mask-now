/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Modal, Button } from '../components'
import { useState, useEffect } from 'react'

const ModalWithDay = ({ size, closeModal, children, days, day, visible }) => {
  const [animate, setAnimate] = useState(false)
  const [localVisible, setLocalVisible] = useState(visible)

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 250)
    }
    setLocalVisible(visible)
  }, [localVisible, visible])

  if (!animate && !localVisible) return null

  return (
    <Modal size={size} disappear={!visible}>
      <div css={dayModalStyle(day)}>
        <h2>
          마스크 구매 요일은 <span>{days[day]}</span>입니다.
        </h2>
        <p>
          ※ 주의사항 ※
          <br />
          마스크는 1인 2매까지 구매 가능하며,
          <br /> 신분증을 꼭 지참하시기 바랍니다.
        </p>
        <Button onClick={closeModal} color="secondary">
          다른 요일도 보러 가기
        </Button>
      </div>
    </Modal>
  )
}

const dayColors = ['#f6e58d', '#95afc0', '#eb4d4b', '#22a6b3', '#6ab04c']

const colorStyle = day => css`
  color: ${dayColors[day]};
`

const dayModalStyle = day => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  h3 {
    padding: 0px 10px;
    padding-bottom: 25px;
  }
  p {
    text-align: center;
    position: absolute;
    top: 71px;
    line-height: 16px;
    font-size: 14px;
    color: #bcbcbc;
  }
  h2 > span {
    ${colorStyle(day)};
    font-size: 28px;
    text-shadow: 1.2px 1.5px 1.2px rgba(151, 151, 151, 0.6);
  }
`

export default ModalWithDay
