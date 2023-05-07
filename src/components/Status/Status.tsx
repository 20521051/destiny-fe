import React from 'react'
const Status = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-300 w-[770px] h-[130px]'>
      <div className='flex h-[75px] items-start '>
        <h3 className='w-[700px] text-slate-700 font-bold text-5xl'>Ngọc Mai</h3>
        <button className='rounded-full border-2 border-slate-300 bg-red-500 text-white w-[120px] h-[32px] font-bold text-2xl'>
          Theo dõi
        </button>
      </div>

      <div className='flex'>
        <div className='w-[200px] text-slate-500 font-bold'>
          <p>SỐ NGƯỜI THEO DÕI</p> <p className='text-red-400 font-bold'>911 người</p>
        </div>
        <div className='w-[200px] text-slate-500 font-bold'>
          <p>ĐÃ ĐƯỢC THUÊ</p> <p className='text-red-400 font-bold'>3693 giờ</p>
        </div>
        <div className='w-[200px] text-slate-500 font-bold'>
          <p>TỶ LỆ HOÀN THÀNH</p> <p className='text-red-400 font-bold'>89.72%</p>
        </div>
        <div className='text-slate-500 font-bold'>
          <p>TÌNH TRẠNG THIẾT BỊ</p> <p></p>
        </div>
      </div>
    </div>
  )
}

export default Status
