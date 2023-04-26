import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Home, Error } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  </BrowserRouter>
)

export default App
