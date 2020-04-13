import React, { useRef } from 'react'
import { SearchBar } from '../components'

const SearchContainer = ({ getCoords }) => {
  const { kakao } = window
  const geocoder = new kakao.maps.services.Geocoder()

  let searchInput = useRef()

  const onEnter = () => {
    if (window.event.keyCode === 13) {
      doSearch()
    }
  }
  const doSearch = () => {
    geocoder.addressSearch(searchInput.current.value, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
        getCoords(coords)
      } else {
        alert('검색 결과가 없습니다😥')
      }
    })
  }
  return (
    <SearchBar
      placeholder="주소를 입력해주세요"
      onClick={doSearch}
      onEnter={onEnter}
      inputRef={searchInput}
    ></SearchBar>
  )
}

export default SearchContainer
