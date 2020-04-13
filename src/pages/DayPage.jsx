import React from 'react'
import { PageTemplate } from '../components'
import { DayContainer } from '../containers'

const DayPage = () => {
  return (
    <PageTemplate info="🎂출생년도 끝자리를 입력해주세요 🎂">
      <DayContainer />
    </PageTemplate>
  )
}

export default DayPage
