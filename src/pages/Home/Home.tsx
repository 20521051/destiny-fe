import React, { useState } from 'react'
import { Header, Footer, SideBar, SlideShow } from '../../components'

const Home = () => {
  return (
    <div className='Home'>
      <Header></Header>
      <div className='flex'>
        <SideBar mode='light'></SideBar>
        <div className=''>
          <SlideShow></SlideShow>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
