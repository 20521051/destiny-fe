import React from 'react'
import { FacebookIcon } from '../icons'
const AvatarUser = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-100 w-[320px] h-[900px] '>
      <div className='border-b-2'>
        <img
          src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/154264031_803797940207697_2082102846250768451_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=k3AANrVUU1MAX9x0nUr&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfCGX8po8RqnXK7109gGVNPO2C56eIwPD2RXbELOf8lF0Q&oe=6480112D'
          alt='avatar1'
          className='w-[300px] h-[300px] rounded-2xl m-2 mb-9 '
        />
        <h3 className='flex justify-center  text-green-500	font-bold text-3xl mb-6'>Đang sẵn sàng</h3>
        <div className='flex justify-center mb-6'>
          <button>
            <FacebookIcon initialSize={28}></FacebookIcon>
          </button>
        </div>
        <div className='flex justify-center h-[50px] text-xl '>
          <p className='text-slate-400'>NGÀY THAM GIA:</p> <p>07/05/2023</p>
        </div>
        <p className='text-red-600 font-bold text 2xl'>THÀNH TÍCH</p>
      </div>
      <div className='mt-5'>
        <p className='mb-6 font-bold'>
          Chỉ mong sau này gặp lại, Ai cũng trọn vẹn một đời. đừng như chúng ta năm đó, Nửa vời,...Nửa đoạn.....
        </p>
        <p className='flex justify-end mb-12 text-slate-300 '>07/05/2023</p>
        <p className='mb-6 font-bold'>
          Vào những ngày thời tiết xấu, tôi lại lôi những vết rách trong tym ra, tỉ mỉ khâu lại. Bởi vì anh ấy ở trong
          đó, rất có thể sẽ bị ướt mưa.....
        </p>
        <p className='flex justify-end text-slate-300'>07/05/2023</p>
      </div>
    </div>
  )
}
export default AvatarUser
