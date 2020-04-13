import React, { createContext, useState } from 'react'

const initialLocation = {
  latitude: 37.56647,
  longitude: 126.977963,
  address: '',
}

const LocationContext = createContext({
  location: initialLocation,
  changeLocation: () => {},
})

export const LocationProvider = ({ children }) => {
  const [location, changeLocation] = useState(initialLocation)

  const value = {
    location,
    changeLocation: changeLocation,
  }

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export default LocationContext
