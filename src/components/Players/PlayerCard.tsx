import { Avatar, AvatarGroup } from '@mui/material'
import React, { useState } from 'react'

interface PlayerCardProps {
  userImage: string
  name: string
}
const PlayerCard = ({ userImage, name }: PlayerCardProps) => {
  return (
    <div className='min-w-[230px] w-[230px] h-[280px] mx-[3px] rounded-xl border-slate-300 border-[1px]'>
      <div className='h-[180px] rounded-t-xl overflow-hidden flex' aria-hidden='true'>
        <img src={userImage} alt='avatar' className='inline-block object-fill' />
      </div>
      <div>
        <div>
          <div className='flex justify-between items-center py-2 px-4'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <p className='px-4'>description</p>
        </div>
        <div className='flex justify-between items-center px-4 py-2'>
          <div className='flex'>
            <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-1' aria-hidden='true'>
              <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
            </div>
            <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-1' aria-hidden='true'>
              <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
            </div>
            <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-1' aria-hidden='true'>
              <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
            </div>
            <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full relative' aria-hidden='true'>
              <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
              <p className='absolute font-bold text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                +2
              </p>
            </div>
          </div>
          <div className='flex'>
            <p className='font-bold mx-1'>5</p>
            <p className='text-slate-400'>(2131)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
