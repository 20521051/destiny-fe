import React, { useState } from 'react'
import { Header, Footer, SideBar, SlideShow, Categories } from '~/components'
import { Stories } from '~/components/Stories'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        <SideBar mode='light'></SideBar>
        <div>
          <SlideShow></SlideShow>
          <Categories></Categories>
          <Stories></Stories>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
