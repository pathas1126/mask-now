import React, { useState } from 'react'
import { NumberPad } from '../components'
import { ModalWithDay } from '.'

const DayContainer = () => {
  const [modal, setModal] = useState(false)
  const [day, setDay] = useState(0)
  const days = ['금요일', '월요일', '화요일', '수요일', '금요일']
  const popupModal = number => {
    setDay(number)
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div>
      <NumberPad popupModal={popupModal} />
      <ModalWithDay closeModal={closeModal} size="wide" day={day} days={days} visible={modal} />
    </div>
  )
}

export default DayContainer
