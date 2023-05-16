import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
interface PlayProps {
  story: string
  userImage: string
  visible: boolean
}
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

  const root = document.getElementById('root') as HTMLElement
  return createPortal(
    <div style={{ visibility: visible ? 'visible' : 'hidden' }} className='bg-green-500 w-[200px] h-[400px]'>
      <video muted className='h-[200px] w-[100px] bg-slate-400'>
        <source src='/src/assets/videos/y2meta.mp4' type='video/mp4' />
      </video>
    </div>,
    root
  )
}

export default Play
