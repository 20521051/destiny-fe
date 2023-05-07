import React from 'react'
import StoryCard from './StoryCard'

const Stories = () => {
  return (
    <div>
      <h2>Stories</h2>
      <div>
        <StoryCard
          story='/src/assets/videos/y2meta.mp4'
          userImage='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        ></StoryCard>
      </div>
    </div>
  )
}
export default Stories
