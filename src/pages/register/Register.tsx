import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EUFlagIcon, USFlagIcon, VNFlagIcon } from '~/components/icons'

const Register = () => {
  const navigate = useNavigate()
  const [phoneCountry, setPhoneCountry] = useState<string>('VN')
  const handleClickSignIn = () => {
    navigate('/login')
  }
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPhoneCountry(event.target.value)
  }
  const Flag = () => {
    switch (phoneCountry) {
      case 'VN':
        return <VNFlagIcon />
      case 'US':
        return <USFlagIcon />
      case 'EU':
        return <EUFlagIcon />
      default:
        return <div />
    }
  }
  return (
    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <header className='mb-14'>
        <h2 className='font-josefin text-7xl mb-3'>Sign In</h2>
        <p>
          Already have an account?
          <button className='text-emerald-500 hover:text-red-600' onClick={handleClickSignIn}>
            {' '}
            Login
          </button>
        </p>
      </header>
      <form action='#' method='POST' className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label htmlFor='last-name' className='block text-sm font-semibold leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='phone-number' className='block text-sm font-semibold leading-6 text-gray-900'>
              Phone number
            </label>
            <div className='mt-2.5 flex'>
              <div className='flex items-center'>
                <div></div>
                <select
                  id='country'
                  name='country'
                  className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-3 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                  onChange={handleCountryChange}
                  value={phoneCountry}
                >
                  <option value='VN'>VN</option>
                  <option value='US'>US</option>
                  <option value='EU'>EU</option>
                </select>
              </div>
              <input
                type='tel'
                name='phone-number'
                id='phone-number'
                autoComplete='tel'
                className='w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
