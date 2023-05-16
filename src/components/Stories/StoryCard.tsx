import React, { useRef, useState } from 'react'
import Play from './Play'
interface StoryCardProps {
  story: string
  userImage: string
}
const StoryCard = ({ story, userImage }: StoryCardProps) => {
  const [play, setPlay] = useState<boolean>(false)
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
  const handleClick = () => {
    setPlay(true)
  }
  return (
    <div>
      <button
        className='min-w-[160px] w-[160px] h-[220px] mx-[3px] rounded-xl border-slate-300 border-2 relative overflow-hidden flex'
        onClick={handleClick}
      >
        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex absolute top-3 left-4' aria-hidden='true'>
          <img src={userImage} alt='avatar' className='inline-block object-cover' />
        </div>
        <img className='inline-block object-fill' src='/src/assets/images/CallofDuty.jpg' alt='img' />
        <h3 className='absolute bottom-6 left-8 text-white text-2xl font-bold'>Jeff</h3>
      </button>
      {/* <Play visible={play} userImage={userImage} story={story}></Play> */}
    </div>
  )
}

export default StoryCard
