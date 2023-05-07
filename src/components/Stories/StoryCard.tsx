import React, { useRef } from 'react'
interface StoryCardProps {
  story: string
  userImage: string
}
const StoryCard = ({ story, userImage }: StoryCardProps) => {
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
  return (
    <div>
      <video muted ref={videoRef} width={80} height={100} className=''>
        <source src={story} type='video/mp4' />
      </video>
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex' aria-hidden='true'>
        <img src={userImage} alt='avatar' className='inline-block object-cover' />
      </div>
    </div>
  )
}

export default StoryCard
