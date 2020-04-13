import React from 'react'
import { Route } from 'react-router-dom'
import { ROUTES } from './constants'
import { LocationProvider } from './store/LocationContext'

function App() {
  return (
    <LocationProvider>
      {ROUTES.map(({ path, component, exact }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </LocationProvider>
  )
}

export default App
