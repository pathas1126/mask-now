import React, { useState, useEffect } from 'react'
import { fetchMask, usePromise, useCurrentLocation } from '../library'
import { List, Loader } from '../components'

const ListContainer = ({ coords }) => {
  console.log({ coords })
  const [{ latitude, longitude }, setLocation] = useState({ latitude: null, longitude: null })
  const currentLocation = useCurrentLocation()
  useEffect(() => {
    setLocation(currentLocation)
  }, [currentLocation])
  useEffect(() => {
    if (coords) {
      const { Ga, Ha } = coords
      setLocation({ latitude: Ha, longitude: Ga })
    }
  }, [coords])

  const [loading, response, error] = usePromise(() => {
    if (latitude || longitude)
      return fetchMask({
        method: 'GET',
        url: `/storesByGeo/json?lat=${latitude}&lng=${longitude}`,
      })
  }, [latitude, longitude])

  if (loading) return <Loader />

  if (error || !response || !response.data.stores) return <p>리스트를 가져올 수 없습니다. 😧</p>

  const {
    data: { stores },
  } = response
  return <List data={stores}></List>
}

export default ListContainer
