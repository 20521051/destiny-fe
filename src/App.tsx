import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Home, NotFound, Profile } from '~/pages'
import { MainLayout } from './layouts'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/userID' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
