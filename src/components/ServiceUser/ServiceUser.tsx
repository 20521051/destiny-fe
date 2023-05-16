import React from 'react'

const ServiceUser = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-300 w-[770px] h-[130px]'>
      <div className='w-[200px] h-[50px] flex overflow-hidden rounded-2xl relative bg-black' aria-hidden='true'>
        <img
          src='/src/assets/images/lienminhhuyenthoai.jpg'
          alt='avatar'
          className='w-full inline-block object-fill brightness-50'
        />
        <p className='absolute font-bold text-white top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%] w-full'>
          Liên Minh Huyền Thoại
        </p>
      </div>
    </div>
  )
}
export default ServiceUser
