import React, { useState } from 'react'
import { Header, Footer, SideBar } from '../components/UI'

const Home = () => {
  return (
    <div className='Home'>
      <Header></Header>
      <div className='flex'>
        <SideBar tailwindCss='flex-initial'></SideBar>
        <div className=''></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
