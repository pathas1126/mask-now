/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const ColorInfo = () => {
  return (
    <div css={container}>
      <span>색상별 마스크 재고</span>
      <div>
        <span>&nbsp; 100매 이상</span>
      </div>
      <div>
        <span>&nbsp; 30 ~ 99매</span>
      </div>
      <div>
        <span>&nbsp; 2 ~ 29매</span>
      </div>
      <div>
        <span>&nbsp; 0 ~ 1매</span>
      </div>
      <div>
        <span>&nbsp; 판매 중지</span>
      </div>
    </div>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 13%;
  height: 25%;
  min-width: 140px;
  min-height: 150px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 5;
  animation-name: fromLeft;
  animation-duration: 1s;
  & > span {
    padding: 0px 2px;
    margin-bottom: 1px;
    text-align: center;
    color: #655656;
    font-size: 15px;
    font-weight: 600;
  }
  & > div {
    margin-top: 2%;
    display: flex;
    width: 88%;
    height: 13.5%;
    padding: 0px 0px 0px 5px;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  & > div > span {
    font-size: 14px;
    padding-bottom: 1px;
  }

  & > div > span::before {
    content: '●';
    color: red;
  }

  & > div:nth-of-type(1) > span,
  & > div:nth-of-type(1) > span::before {
    color: ${COLORS.plenty};
  }

  & > div:nth-of-type(2) > span,
  & > div:nth-of-type(2) > span::before {
    color: ${COLORS.some};
  }
  & > div:nth-of-type(3) > span,
  & > div:nth-of-type(3) > span::before {
    color: ${COLORS.few};
  }
  & > div:nth-of-type(4) > span,
  & > div:nth-of-type(4) > span::before {
    color: ${COLORS.empty};
  }
  & > div:nth-of-type(5) > span,
  & > div:nth-of-type(5) > span::before {
    color: #000000;

    @keyframes fromLeft {
      from {
        margin-left: -300px;
      }
      to {
        margin-left: 0;
      }
    }
  }
`

export default ColorInfo
