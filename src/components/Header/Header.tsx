import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DestinyIcon, NotificationIcon } from '~/components/icons'
import { SearchBar, CustomizedButtons } from '~/components'

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleClickHome = () => {
    navigate('/')
  }
  const handleClickSignIn = () => {
    // navigate('/login')
    setIsLogin(true)
  }
  const handleTest = () => {
    setIsLogin(false)
  }
  return (
    <header className='flex h-[67px] border-b-slate-300 border-b-2 bg-white justify-between px-10 items-center'>
      <button className='flex items-center' onClick={handleClickHome}>
        <DestinyIcon initialSize={36}></DestinyIcon>
        <h1 className='select-none font-josefin text-4xl'>DESTINY</h1>
      </button>
      <div>
        <SearchBar />
      </div>
      <div className='w-[115px] flex justify-end items-center'>
        {isLogin ? (
          <React.Fragment>
            <div>
              <NotificationIcon initialSize={26}></NotificationIcon>
            </div>
            <div
              onClick={handleTest}
              className='w-[40px] h-[40px] rounded-full overflow-hidden flex'
              aria-hidden='true'
            >
              <img src='/src/assets/images/Naraka.jpg' alt='avatar' className='inline-block object-cover' />
            </div>
          </React.Fragment>
        ) : (
          <CustomizedButtons onClick={handleClickSignIn} title='Login' padding='5px 40px'></CustomizedButtons>
        )}
      </div>
    </header>
  )
}

export default Header
