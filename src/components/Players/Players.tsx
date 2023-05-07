import React from 'react'
import PlayerCard from './PlayerCard'

const Players = () => {
  return (
    <div className='max-w-[1350px] w-[90%] h-[650px] mx-[5%]'>
      <h2 className='h-[50px] text-3xl font-bold'>Top Players</h2>
      <div className='h-[580px] mx-[20px] pt-[10px] flex justify-between flex-wrap'>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
        <PlayerCard name='Anna' userImage='/src/assets/images/valorant.jpg'></PlayerCard>
      </div>
    </div>
  )
}

export default Players
