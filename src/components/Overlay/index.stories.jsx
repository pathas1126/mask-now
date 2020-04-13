/** @jsx jsx */
import { jsx } from '@emotion/core'
import Overlay from '.'

export default {
  title: 'Components|Overlay',
  component: Overlay,
}

export const Default = () => <Overlay />

export const plenty = () => <Overlay remain_stat="plenty" />

export const some = () => <Overlay remain_stat="some" />

export const few = () => <Overlay remain_stat="few" />

export const empty = () => <Overlay remain_stat="empty" />

// break가 예약어라 soldout으로 작성
export const soldout = () => <Overlay remain_stat="break" />
