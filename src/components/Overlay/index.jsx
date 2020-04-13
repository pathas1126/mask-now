/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const Overlay = ({ name = '약국 이름', addr = '약국 주소', remainStat }) => {
  let status = ''
  switch (remainStat) {
    case 'plenty':
      status = '100매 이상'
      break
    case 'some':
      status = '30 ~ 99매'
      break
    case 'few':
      status = '2 ~ 29매'
      break
    case 'empty':
      status = '0 ~ 1매'
      break
    case 'break':
      status = '판매 중지'
      break
    default:
      status = '정보 없음'
  }
  return (
    <article css={articleStyle}>
      <div css={nameStyle}>{name}</div>
      <div css={[remainStyle[remainStat], stackStyle]}>{status}</div>
      <div css={addrStyle}>
        <p>{addr}</p>
      </div>
    </article>
  )
}

const articleStyle = css`
  padding: 5px;
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${COLORS['primary']};
  border-radius: 3%;
  margin: 0px 0px 195px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);
  animation: bounce 0.5s infinite alternate;
  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-6px);
    }
  }
`

const nameStyle = css`
  padding-bottom: 2px;
  border-bottom: 1px solid ${COLORS.primary};
  color: ${COLORS.primary};
  font-size: 15px;
`

const stackStyle = css`
  margin: 3px 0;
  font-size: 17px;
`

const remainStyle = {
  plenty: css`
    color: ${COLORS.plenty};
  `,
  some: css`
    color: ${COLORS.some};
  `,
  few: css`
    color: ${COLORS.few};
  `,
  empty: css`
    color: ${COLORS.empty};
  `,
  break: css`
    color: black;
  `,
}

const addrStyle = css`
  width: 100%;
  color: #aaaaaa;
  font-size: 12px;
  & > p {
    margin: 0;
    white-space: normal;
    word-break: keep-all;
    word-wrap: normal;
  }
`

export default Overlay
