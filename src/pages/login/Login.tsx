import React, { useState } from 'react'
import {
  DestinyIcon,
  FacebookIcon,
  AppleIcon,
  TwitterIcon,
  GoogleIcon,
  LockIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  PhoneIcon
} from '../../components/icons'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import { useNavigate } from 'react-router-dom'
import { Checkbox, IconButton, InputAdornment } from '@mui/material'

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleClickSignUp = () => {
    navigate('/register')
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleClickForgot = () => {}

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <div className='h-[713px] flex justify-center bg-gradient-to-r from-emerald-100 to-pink-100'>
      <div className='w-3/4 flex bg-white m-20 rounded-2xl border-[1px] border-solid border-slate-400'>
        <aside className='w-[45%] bg-teal-200 rounded-2xl'>
          <div className='mt-5'>
            <DestinyIcon initialSize={64} />
          </div>
          <img className='object-fill' src='/src/assets/images/Naraka.jpg'></img>
        </aside>
        <div className='w-[55%] flex justify-center items-center'>
          <div className='w-[60%] flex flex-col'>
            <header className='mb-14'>
              <h2 className='font-josefin text-7xl mb-3'>Sign In</h2>
              <p>
                Don't have an account?
                <a className='text-emerald-500 hover:text-red-600' onClick={handleClickSignUp}>
                  {' '}
                  Register
                </a>
              </p>
            </header>

            <div>
              <div className='flex flex-col justify-between mb-5'>
                <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
                  <h2 className='mb-4'>Phone</h2>
                  <Input
                    id='component-simple'
                    placeholder='Enter your Number phone'
                    startAdornment={
                      <InputAdornment position='start'>
                        <PhoneIcon initialSize={20}></PhoneIcon>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
                  <h2 className='mb-4'>Password</h2>
                  <Input
                    id='component-simple'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your Password'
                    startAdornment={
                      <InputAdornment position='start'>
                        <LockIcon initialSize={20}></LockIcon>
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityIcon initialSize={20} /> : <VisibilityOffIcon initialSize={20} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className='flex  justify-between'>
                <div className='flex items-center'>
                  <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                  <p>Remember me</p>
                </div>
                <div className='hover:text-red-600' onClick={handleClickForgot}>
                  Forgot Password?
                </div>
              </div>
              <div className='flex justify-center mt-8 mb-12'>
                <button className='bg-slate-400 w-[200px] h-[40px] rounded-3xl'>Login</button>
              </div>
            </div>

            <footer className='flex flex-col items-center'>
              <div className='text-center italic mb-2'>Or continue with</div>
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
              <p className='text-xl text-center my-4'>
                Your continued use of this website means that you agree to our{' '}
                <a className='underline hover:text-red-600' type='link'>
                  Terms of Use
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
