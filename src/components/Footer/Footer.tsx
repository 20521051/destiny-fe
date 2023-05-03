import React from 'react'
import { AppStore, CHPlay, DestinyIcon, FacebookIcon, LinkedinIcon, TelegramIcon } from '~/components/icons'
import { useNavigate } from 'react-router'

const Footer = () => {
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <footer className='flex flex-col bg-slate-900 text-white justify-between px-[100px]'>
      <div className='text-center m-10 pt-10'>
        <h2 className='text-4xl font-josefin'>Welcome to Destiny</h2>
      </div>
      <div className='flex justify-center items-center pb-6'>
        <button className='translate-x-[-5%]'>
          <CHPlay initialSize={160} initialFill='#fff' initialColor='#282a36' initialBorderColor='#ec4899' />
        </button>
        <button className='translate-x-[5%]'>
          <AppStore initialSize={160} initialFill='#fff' initialColor='#282a36' initialBorderColor='#ec4899' />
        </button>
      </div>
      <div className='flex justify-between m-10 pl-24 pr-24'>
        <div>
          <h2 className='text-2xl font-josefin uppercase'>Navigation</h2>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-josefin uppercase'>About Destiny</h2>
          <ul className='cursor-pointer'>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-josefin uppercase'>My team</h2>
          <ul className='cursor-pointer'>
            <li>About us</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-josefin uppercase'>Talk to us</h2>
          <ul className='cursor-pointer'>
            <li>About us</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between mr-10 ml-10 mb-5 text-center items-center'>
        <button onClick={handleClickLogo}>
          <DestinyIcon initialSize={70}></DestinyIcon>
        </button>
        <p>© 2023 Destiny. Vietnam&rsquo;s leading finding soulmate platform</p>
        <div className='flex justify-between items-center'>
          <FacebookIcon initialSize={36}></FacebookIcon>
          <LinkedinIcon initialSize={36}></LinkedinIcon>
          <TelegramIcon initialSize={36}></TelegramIcon>
        </div>
      </div>
    </footer>
  )
}

export default Footer
