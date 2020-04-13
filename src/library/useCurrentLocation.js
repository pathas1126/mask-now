import { useState, useEffect } from 'react'

const getCurrentLocation = function(options) {
  const geo = navigator.geolocation

  if (!geo) {
    alert('❌ 현재 위치를 가져올 수 없습니다. 검색창에 직접 위치를 입력해주세요.')
    return new Promise(resolve => resolve({}))
  }

  return new Promise(resolve => geo.getCurrentPosition(resolve, alertError, geoOptions))
}

const useCurrentLocation = () => {
  const [location, setLocation] = useState({})
  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const {
          coords: { latitude, longitude },
        } = await getCurrentLocation()
        setLocation({ latitude, longitude })
      } catch (error) {
        console.log(error)
      }
    }
    fetchCurrentLocation()
  }, [])

  return location
}

const geoOptions = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Infinity,
}

const alertError = error => {
  let message = ''
  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = '❌ 현재 위치 사용을 거절했습니다.'
      break
    case error.POSITION_UNAVAILABLE:
      message = '❌ 위치 정보를 사용할 수 없습니다.'
      break
    case error.TIMEOUT:
      message = '❌ 요청 시간이 초과되었습니다.'
      break
    case error.UNKNOWN_ERROR:
      message = '❌ 알 수 없는 오류가 발생하였습니다.'
      break
    default:
      message = '❌ 현재 위치를 가져올 수 없습니다.'
  }
  alert(message + '검색창에 직접 위치를 입력해주세요.')
}

export default useCurrentLocation
