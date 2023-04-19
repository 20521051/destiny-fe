import React from 'react'
import { DestinyIcon, FacebookIcon, AppleIcon, TwitterIcon, GoogleIcon } from '../../components/icons'

import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <div className='w-full h-full bg-lime-500 flex justify-center'>
      <div className='w-3/4 h-4/5 flex bg-red-300 m-20 rounded-2xl'>
        <aside className='w-1/3 bg-teal-200 rounded-2xl'>
          <div className='mt-5'>
            <DestinyIcon initialSize={64} />
          </div>
        </aside>
        <div className='w-2/3 flex flex-col'>
          <header>
            <h2>Sign In</h2>
            <p>
              <a href=''>Register. </a>
              If you don't have account.
            </p>
          </header>

          <div>
            <div className='flex flex-col justify-between mt-5'>
              <FormControl variant='standard'>
                <InputLabel htmlFor='component-simple'>Your account</InputLabel>
                <Input id='component-simple' defaultValue='User name' />
              </FormControl>
              <FormControl variant='standard'>
                <InputLabel htmlFor='component-simple'>Password</InputLabel>
                <Input id='component-simple' defaultValue='Password' />
              </FormControl>
            </div>
            <div className='flex  justify-between'>
              <div>Remember me</div>
              <div>Forgot Password?</div>
            </div>
            <div className='flex justify-center'>
              <button className='bg-slate-400 mb-10 pr-20 pl-20 pt-5 pb-5 rounded-3xl'>Login</button>
            </div>
          </div>

          <footer>
            <div className='text-center'>-------------- Or --------------</div>
            <div className='flex justify-center'>
              <button className='bg-slate-400 m-3'>
                <GoogleIcon initialSize={38} />
              </button>
              <button className='bg-slate-400 m-3'>
                <FacebookIcon initialSize={38} />
              </button>
              <button className='bg-slate-400 m-3'>
                <AppleIcon initialSize={38} />
              </button>
              <button className='bg-slate-400 m-3'>
                <TwitterIcon initialSize={38} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
