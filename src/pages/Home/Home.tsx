import React, { useState } from 'react'
import { Header, Footer, SideBar, SlideShow, Categories, Players, Stories } from '~/components'

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <SideBar mode='light'></SideBar>
        <div>
          <SlideShow></SlideShow>
          <Categories></Categories>
          <Stories></Stories>
          <Players></Players>
        </div>
      </div>
    </div>
  )
}

export default Home
