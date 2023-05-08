import React from 'react'

const Comment = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-300 w-[770px] h-[95px] flex'>
      <div className='w-[70px] h-[70px] overflow-hidden flex rounded-full m-3 mr-7' aria-hidden='true'>
        <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
      </div>
      <div className='flex'>
        <div className='w-[600px]'>
          <p className='h-[35px] text-cyan-600 text-3xl font-bold'>Minh Tú</p>
          <p className='h-[40px]'>00:07:05 07/05/2002</p>
          <p className='text-2xl'>Xuất sắc</p>
        </div>
        <div>
          <p className='h-[30px]'>Icon</p>
          <p className='font-bold'>(Thuê 3h)</p>
        </div>
      </div>
    </div>
  )
}

export default Comment
