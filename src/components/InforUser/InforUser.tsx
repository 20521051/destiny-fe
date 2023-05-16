import React from 'react'

const InforUser = () => {
  return (
    <div className='rounded-2xl	 border-2 border-slate-100 w-[590px] h-[350px]'>
      <div>
        <h3 className='mt-10 text-slate-900 text-4xl font-bold'>Thông tin</h3>
        <p className='mt-4'>Rất đáng yêu</p>
      </div>
      <div className='flex w-[580px] h-[170px] mt-4'>
        <div className='w-[180px] h-[150px] flow-hidden flex mr-4 '>
          <img
            src='https://playerduo.net/api/upload-service/images/89f8cecd-7938-4c5e-bd79-29458095c757__239e0a50-eb59-11ed-a657-a54d6be1d46a__player_album.jpg'
            alt='anh1'
            className='inline-block'
          />
        </div>
        <div className='w-[180px] h-[150px] flow-hidden flex mr-4'>
          <img
            src='https://playerduo.net/api/upload-service/images/89f8cecd-7938-4c5e-bd79-29458095c757__04383c10-e287-11ed-a19f-23a3b10d190e__player_album.jpg'
            alt=''
            className='inline-block'
          />
        </div>
        <div className='w-[180px] h-[150px] flow-hidden flex mr-4 '>
          <img
            src='https://playerduo.net/api/upload-service/images/89f8cecd-7938-4c5e-bd79-29458095c757__d6bc2920-d6df-11ed-a19f-23a3b10d190e__player_album.jpg'
            alt=''
            className='inline-block'
          />
        </div>
        <div className='w-[180px] h-[150px] flow-hidden flex mr-4'>
          <img
            src='https://playerduo.net/api/upload-service/images/89f8cecd-7938-4c5e-bd79-29458095c757__80c5a070-c5f8-11ed-a19f-23a3b10d190e__player_album.jpg'
            alt=''
            className='inline-block'
          />
        </div>
        <div className='w-[180px] h-[150px] flow-hidden flex relative'>
          <img
            src='https://playerduo.net/api/upload-service/images/89f8cecd-7938-4c5e-bd79-29458095c757__b7af9b20-94f9-11ed-a19f-23a3b10d190e__player_album.jpg'
            alt=''
            className='inline-block object-fill brightness-50'
          />
          <p className='absolute font-bold text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl'>
            +2
          </p>
        </div>
      </div>
      <div className=''>
        <p>Giọng miền nam,mình nhận lol ạ</p>
        <p>Mình chỉ nhận dou trên 2h ạ</p>
        <p>Không nhận 18+,cảm ơn ạ !</p>
      </div>
    </div>
  )
}

export default InforUser
