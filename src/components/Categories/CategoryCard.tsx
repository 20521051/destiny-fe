import React, { useState } from 'react'

const CategoryCard = () => {
  const [hovered, setHovered] = useState<boolean>(false)

  const handleMouseLeave = () => {
    setHovered(false)
  }
  const handleMouseEnter = () => {
    setHovered(true)
  }
  return (
    <button
      className={`
          min-w-[190px] w-[190px] h-[220px] mx-[3px] rounded-xl border-slate-300 border-2 flex flex-col items-center
          ${hovered ? 'bg-slate-300' : 'bg-white'}
          `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='w-[170px] h-[220px] rounded-xl overflow-hidden flex translate-y-[-20%] transition-transform'>
        <img
          src='/src/assets/images/Naraka.jpg'
          alt='avatar'
          className={`inline-block object-cover transform ${hovered ? 'scale-125' : ''}`}
        />
      </div>
      <div className='flex items-center translate-y-[-50%]'>
        <h3 className={`h-[20px] mb-2 text-3xl font-bold ${hovered ? 'text-red-600' : 'text-emerald-500'}`}>Naraka</h3>
      </div>
    </button>
  )
}

export default CategoryCard
