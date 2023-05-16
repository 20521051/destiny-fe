import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Home, NotFound, Profile } from '~/pages'
import { MainLayout } from '~/layouts'
import { Chart } from '~/components'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='chart' element={<Chart />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/userID' element={<Profile userID='12' />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
