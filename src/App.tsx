import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Home, Error } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/*' Component={Error} />
    </Routes>
  </BrowserRouter>
)

export default App
