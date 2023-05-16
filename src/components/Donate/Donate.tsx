import React from 'react'

const Donate = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-300 w-[660px] h-[260px]'>
      <div className='flex mt-7'>
        <p className='text-slate-900 text-4xl font-bold mr-10'>Top Donate</p>
        <p className='text-slate-400 text-4xl font-bold'>Top Donate Tháng</p>
      </div>
      <div className='flex mt-7'>
        <p className='text-slate-900 text-2xl font-bold w-[40px]'>#1</p>
        <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-4' aria-hidden='true'>
          <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
        </div>
        <p className='w-[475px] text-red-900'>Minh Tú</p>
        <p className='font-bold'>265,230,000 đ</p>
      </div>
      <div className='flex mt-4'>
        <p className='text-slate-900 text-2xl font-bold w-[40px]'>#2</p>
        <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-4' aria-hidden='true'>
          <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
        </div>
        <p className='w-[475px] text-orange-500'>Hoàng An</p>
        <p className='font-bold'>265,230,000 đ</p>
      </div>
      <div className='flex mt-4'>
        <p className='text-slate-900 text-2xl font-bold w-[40px]'>#3</p>
        <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-4' aria-hidden='true'>
          <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
        </div>
        <p className='w-[475px] text-lime-500'>Nhật Huy</p>
        <p className='font-bold'>265,230,000 đ</p>
      </div>
      <div className='flex mt-4'>
        <p className='text-slate-900 text-2xl font-bold w-[40px]'>#4</p>
        <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-4' aria-hidden='true'>
          <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
        </div>
        <p className='w-[475px] text-blue-500'>Thế Anh</p>
        <p className='font-bold'>265,230,000 đ</p>
      </div>
      <div className='flex mt-4'>
        <p className='text-slate-900 text-2xl font-bold w-[40px]'>#5</p>
        <div className='w-[30px] h-[30px] overflow-hidden flex rounded-full mr-4' aria-hidden='true'>
          <img src='/src/assets/images/freefire.png' alt='avatar' className='inline-block object-fill' />
        </div>
        <p className='w-[475px] text-purple-500'>Phúc Duy</p>
        <p className='font-bold'>265,230,000 đ</p>
      </div>
    </div>
  )
}

export default Donate
