import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DestinyIcon } from '../icons'
import { SearchBar, CustomizedButtons } from '../form'

const Header = () => {
  const navigate = useNavigate()
  const handleClickHome = () => {
    navigate('/')
  }
  const handleClickSignIn = () => {
    navigate('/login')
  }
  return (
    <header className='flex border-b-slate-300 border-b-2 bg-white justify-between p-3 pr-10 pl-10 items-center'>
      <div className='flex items-center' onClick={handleClickHome}>
        <DestinyIcon initialSize={64}></DestinyIcon>
        <h1 className='select-none font-josefin text-5xl'>DESTINY</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <CustomizedButtons onClick={handleClickSignIn} title='Login'></CustomizedButtons>
    </header>
  )
}

export default Header
