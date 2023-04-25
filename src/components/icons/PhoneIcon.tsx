import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function PhoneIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#222')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 24 24'>
      <path
        fill={fillColor}
        d='M6.68 3.32l.613-.613a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414L9.5 8.5a.982.982 0 00-.183 1.133 11.293 11.293 0 005.05 5.05.982.982 0 001.133-.184l1.793-1.792a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414l-.613.613a6 6 0 01-7.843.558l-1.208-.907a22.996 22.996 0 01-4.6-4.6l-.907-1.208A6 6 0 016.68 3.32z'
      ></path>
    </svg>
  )
}

export default PhoneIcon
