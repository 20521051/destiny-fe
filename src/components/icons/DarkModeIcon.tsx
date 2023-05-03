import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function DarkModeIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#fff')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 41 41'>
      <path
        fill={fillColor}
        fillRule='evenodd'
        d='M20.752 4.57a1.667 1.667 0 01-.157 1.932 13.438 13.438 0 00-3.18 8.704c0 7.455 6.043 13.499 13.498 13.499.97 0 1.912-.102 2.82-.295a1.667 1.667 0 011.62 2.706 16.8 16.8 0 01-12.865 5.977c-9.296 0-16.832-7.536-16.832-16.832 0-8.093 5.71-14.848 13.32-16.465a1.667 1.667 0 011.776.775zM15.34 8.808a13.492 13.492 0 00-6.352 11.454c0 7.455 6.044 13.499 13.5 13.499 2.457 0 4.761-.656 6.747-1.804-8.509-.842-15.155-8.02-15.155-16.75 0-2.265.448-4.426 1.26-6.399z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default DarkModeIcon
