import React, { useRef, useEffect, useState, useCallback, useContext } from 'react'
import { renderToString } from 'react-dom/server'
import { SearchBar, Overlay } from '../components'
import { useCurrentLocation, fetchMask } from '../library'
import LocationContext from '../store/LocationContext'
import COLORS from '../assets/colors'
import IMAGES from '../assets/images'

const MapContainer = ({ loading, setLoading, mapRef }) => {
  const [mask, setMask] = useState([])

  let search = useRef('')
  let inputRef = useRef()
  const positions = useRef([])

  const { kakao } = window

  const { location, changeLocation } = useContext(LocationContext)

  const currentLocation = useCurrentLocation()

  useEffect(() => {
    currentLocation && changeLocation(currentLocation)
  }, [changeLocation, currentLocation])

  // 지도 마커 생성 함수
  const setMarker = useCallback(
    ({ latitude, longitude }) => {
      //지도를 담을 영역의 DOM 레퍼런스
      const container = mapRef.current

      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      }
      //지도 생성 및 객체 리턴
      const map = new kakao.maps.Map(container, options)

      // 일반 지도/ 스카이뷰 지도 컨트롤
      const mapTypeControl = new kakao.maps.MapTypeControl()
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

      // 지도 확대 축소 제어 컨트롤
      const zoomControl = new kakao.maps.ZoomControl()
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

      // 마커 설정
      positions.current.forEach(position => {
        // 마커 이미지 관련 변수
        console.log(position.remainStat)
        const imageSrc = IMAGES[position.remainStat],
          imageSize = new kakao.maps.Size(47, 40),
          imageOption = { offset: new kakao.maps.Point(27, 69) }

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          image: markerImage,
        })

        const overlay = new kakao.maps.CustomOverlay({
          content: position.content,
          position: position.latlng,
          xAnchor: 0.7,
          yAnchor: 0.59,
        })

        kakao.maps.event.addListener(marker, 'mousedown', () => {
          overlay.setMap(map)
        })

        kakao.maps.event.addListener(marker, 'mouseup', () => {
          overlay.setMap(null)
        })
      })
    },
    [
      kakao.maps.ControlPosition.RIGHT,
      kakao.maps.ControlPosition.TOPRIGHT,
      kakao.maps.CustomOverlay,
      kakao.maps.LatLng,
      kakao.maps.Map,
      kakao.maps.MapTypeControl,
      kakao.maps.Marker,
      kakao.maps.MarkerImage,
      kakao.maps.Point,
      kakao.maps.Size,
      kakao.maps.ZoomControl,
      kakao.maps.event,
      mapRef,
    ],
  )

  // Enter 입력시 검색 수행 함수
  const onEnter = () => {
    if (window.event.keyCode === 13) {
      doSearch()
    }
  }

  // input 값으로 검색시 사용하는 함수
  const doSearch = async () => {
    const input = search.current.trim()
    if (input === '') {
      return alert('한 글자 이상 입력해 주세요!')
    } else if (input[input.length - 1] !== '구' && input[input.length - 1] !== '동') {
      return alert('구/동 단위로 입력해 주세요!')
    }

    setLoading(true)
    inputRef.current.value = ''
    inputRef.current.placeholder = '검색중...🧐'
    const response = await fetchMask({ method: 'GET', url: `/storesByAddr/json?address=${input}` })
    setLoading(false)
    inputRef.current.placeholder = '도/시/구/동 단위로 검색'

    // 약국 정보 추출
    const {
      data: { stores },
    } = response

    if (stores.length === 0) {
      alert('검색 결과가 없습니다.')
      return getMask()
    }

    setMask(mask => [...stores])

    positions.current = stores.map(store => {
      let remainStat = ''

      if (store.remain_stat) {
        remainStat = store.remain_stat
      } else {
        remainStat = 'noStat'
      }

      return {
        content: renderToString(
          <Overlay name={store.name} addr={store.addr} remainStat={store.remain_stat} />,
        ),
        latlng: new kakao.maps.LatLng(store.lat, store.lng),
        remainStat,
      }
    })

    const firstData = stores[0]

    const newLocation = {
      latitude: firstData.lat,
      longitude: firstData.lng,
    }

    changeLocation(newLocation)

    setMarker(newLocation)
  }

  const getInputValue = e => {
    search.current = e.target.value
  }

  const getMask = useCallback(async () => {
    const response = await fetchMask({
      method: 'GET',
      url: `/storesByGeo/json?lat=${location.latitude}&lng=${location.longitude}&m=1000`,
    })
    setLoading(false)

    // 약국 정보 추출
    const {
      data: { stores },
    } = response

    if (stores) {
      setMask(mask => [...stores])

      positions.current = stores.map(store => {
        let remainStat = ''

        if (store.remain_stat) {
          remainStat = store.remain_stat
        } else {
          remainStat = 'noStat'
        }

        return {
          content: renderToString(
            <Overlay name={store.name} addr={store.addr} remainStat={store.remain_stat} />,
          ),
          latlng: new kakao.maps.LatLng(store.lat, store.lng),
          remainStat,
        }
      })

      setMarker(location)
    }
  }, [kakao.maps.LatLng, location, setLoading, setMarker])

  useEffect(() => {
    if (currentLocation === location) getMask()
  }, [currentLocation, getMask, location])

  return (
    <div>
      <SearchBar
        onEnter={onEnter}
        onClick={doSearch}
        onChange={getInputValue}
        placeholder="도/시/구/동 단위로 검색"
        inputRef={inputRef}
      />
      <p
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '2rem',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          padding: '0.5rem',
          width: '80%',
          textAlign: 'center',
          borderRadius: '10rem',
          color: '#fff',
          background: COLORS.secondary,
          boxShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
        }}
      >
        1km 내에 {mask && mask.length}개의 약국이 있습니다.
      </p>
    </div>
  )
}

export default MapContainer
