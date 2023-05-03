import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function StoryIcon({ initialSize, initialFill, initialColor }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#333')
  const [textColor, setTextColor] = useState<string>(initialColor || '#fff')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 44 44'>
      <path fill={fillColor} d='M2 10a5 5 0 015-5h30a5 5 0 015 5v18a5 5 0 01-5 5H7a5 5 0 01-5-5V10z'></path>
      <path
        fill={textColor}
        d='M28.553 18.776L18.158 13.58a.8.8 0 00-1.158.715v9.412a.8.8 0 001.158.715l10.395-5.197a.25.25 0 000-.448z'
      ></path>
      <rect width='18' height='4' x='13' y='35' fill={fillColor} rx='2'></rect>
    </svg>
  )
}

export default StoryIcon
