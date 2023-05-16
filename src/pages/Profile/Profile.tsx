import React from 'react'
import { Donate, InforUser, Quality, Status, Comment, AvatarUser } from '~/components'
interface ProfileProps {
  userID: string
}
const Profile = ({ userID }: ProfileProps) => {
  return (
    <div className=''>
      <div className='flex justify-between px-[40px]'>
        <AvatarUser></AvatarUser>
        <div>
          <Status></Status>
          <InforUser></InforUser>
          <Donate></Donate>
        </div>
        <Quality></Quality>
      </div>
      <Comment></Comment>
    </div>
  )
}

export default Profile
