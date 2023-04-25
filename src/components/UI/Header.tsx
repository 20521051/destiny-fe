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
    <header className='flex h-[67px] border-b-slate-300 border-b-2 bg-white justify-between px-10 items-center'>
      <button className='flex items-center' onClick={handleClickHome} >
        <DestinyIcon initialSize={36}></DestinyIcon>
        <h1 className='select-none font-josefin text-4xl'>DESTINY</h1>
      </button>
      <div>
        <SearchBar />
      </div>
      <CustomizedButtons onClick={handleClickSignIn} title='Login' padding='5px 40px'></CustomizedButtons>
    </header>
  )
}

export default Header
