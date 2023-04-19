import React, { useState } from 'react'
import { ErrorLayout } from '../layouts'

const Error = () => {
  return (
    <div className='Error'>
      <p className=''>Oops... Page not found!</p>
      <ErrorLayout />
    </div>
  )
}

export default Error
