import React from 'react'
import { DestinyIcon, AppleIcon, AppleWhiteIcon } from '../icons'

const Footer = () => {
  return (
    <footer className='flex w-1440 h-200 bottom-0 right-0 flex-col bg-slate-900 text-white justify-between'>
      <div className='text-center'>
        <h2 className='m-10 text-3xl'>Welcome to Destiny</h2>
      </div>
      <div className='flex justify-center'>
        <button>CH-Play</button>
        <button>App Store</button>
      </div>
      <div className='flex justify-between m-10 pl-24 pr-24'>
        <div>
          <h2>Customer</h2>
          <ul>
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2>Customer</h2>
          <ul>
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between mr-10 ml-10 mb-5 text-center items-center'>
        <div>
          <DestinyIcon initialSize={100}></DestinyIcon>
        </div>
        <p>© 2023 Destiny. All rights reserved</p>
        <div className='flex justify-between items-center'>
          <AppleIcon initialSize={48}></AppleIcon>
          <AppleWhiteIcon initialSize={48}></AppleWhiteIcon>
        </div>
      </div>
    </footer>
  )
}

export default Footer
