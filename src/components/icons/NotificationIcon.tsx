import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function NotificationIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#222')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 24 24'>
      <path
        fill={fillColor}
        d='M6.502 6.975a5.525 5.525 0 0110.995 0l.287 2.866c.018.175.026.262.037.348a8 8 0 001.19 3.325l.192.291.861 1.292c.787 1.18 1.18 1.769 1.008 2.244-.033.09-.078.175-.135.252-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 01-.134-.252c-.173-.475.22-1.065 1.006-2.244l.862-1.292.192-.291a8 8 0 001.19-3.325c.01-.086.02-.173.037-.348l.286-2.866z'
      ></path>
      <path
        stroke={fillColor}
        strokeLinecap='round'
        strokeWidth='2'
        d='M10.068 20.63c.114.106.365.2.715.267.349.067.777.103 1.217.103.44 0 .868-.036 1.217-.103.35-.067.6-.161.715-.268'
      ></path>
    </svg>
  )
}

export default NotificationIcon
