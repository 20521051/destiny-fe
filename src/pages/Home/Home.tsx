import React, { useState } from 'react'
import { Header, Footer, SideBar, SlideShow, Categories, Players, Stories, Comment } from '~/components'

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
          <Players></Players>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
