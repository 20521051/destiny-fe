import React, { useEffect, useRef } from 'react'

const EventLayout = () => {
  return (
    <div>
      <canvas className='canvas'></canvas>
      <div id='merrywrap' className='merrywrap'>
        <div className='giftbox'>
          <div className='cover'>
            <div></div>
          </div>
          <div className='box'></div>
        </div>
      </div>
      <canvas className='c'></canvas>
      <div className='balloon-container'></div>
    </div>
  )
}

export default EventLayout
