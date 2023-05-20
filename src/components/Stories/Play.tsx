import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
interface PlayProps {
  story: string
  userImage: string
  visible: boolean
}
const root = document.getElementById('root') as HTMLElement
const Play = ({ story, userImage, visible }: PlayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return createPortal(
    <div style={{ visibility: visible ? 'visible' : 'hidden' }} className='fixed inset-0 invisible z-1200'>
      <div className='fixed inset-0 flex items-center justify-center bg-opacity-50 z-[-1] transition-opacity duration-225 ease-in-out'></div>
      <div className='fixed h-screen outline-0 flex justify-center items-center opacity-100 transition-opacity duration-225 ease-in-out'>
        <div className='fixed bg-white p-8 rounded-2xl'>
          <video muted className='h-[200px] w-[100px] bg-slate-400'>
            <source src='/src/assets/videos/y2meta.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>,
    root
  )
}

export default Play
