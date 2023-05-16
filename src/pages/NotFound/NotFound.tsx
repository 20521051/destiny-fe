import React from 'react'
import { ErrorLayout } from '~/layouts'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ErrorLayout />
      <p className='text-5xl translate-y-[-60px]'>Oops... Page not found!</p>
    </div>
  )
}

export default NotFound
