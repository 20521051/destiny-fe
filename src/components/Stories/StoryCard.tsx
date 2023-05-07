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
    <div className='min-w-[160px] w-[160px] h-[220px] mx-[3px] rounded-xl border-slate-300 border-2 relative overflow-hidden flex'>
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex absolute top-3 left-4' aria-hidden='true'>
        <img src={userImage} alt='avatar' className='inline-block object-cover' />
      </div>
      <img className='inline-block object-fill' src='/src/assets/images/CallofDuty.jpg' alt='img' />
      {/* <video muted ref={videoRef} width={80} height={100} className=''>
        <source src={story} type='video/mp4' />
      </video> */}
      <h3 className='absolute bottom-6 left-8 text-white text-2xl font-bold'>Jeff</h3>
    </div>
  )
}

export default StoryCard
