import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface PlayerCardProps {
  userId: string
  userImage: string
  name: string
}
const PlayerCard = ({ userImage, name }: PlayerCardProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/userID')
  }
  return (
    <button
      className='min-w-[230px] w-[230px] h-[280px] mx-[3px] rounded-xl border-slate-300 border-[1px]'
      onClick={handleClick}
    >
      <div className='h-[180px] rounded-t-xl overflow-hidden flex relative' aria-hidden='true'>
        <img src={userImage} alt='avatar' className='inline-block object-fill' />
        <button className='w-[80px] h-[30px] bg-orange-600 text-white font-bold text-center rounded-2xl absolute right-3 bottom-3 text-xl'>
          100.000 đ/h
        </button>
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
              <img
                src='/src/assets/images/freefire.png'
                alt='avatar'
                className='inline-block object-fill brightness-50'
              />
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
    </button>
  )
}

export default PlayerCard
