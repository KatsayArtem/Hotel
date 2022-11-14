import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router'

const AppRoter = () => {
  return (
    <div>
        <Routes>
            {publicRoutes.map(({path, component}) => 
                <Route key={path} path={path} element={component} exact/>
            )}
        </Routes>
    </div>
  )
}

export default AppRoter