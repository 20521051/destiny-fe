import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function VNFlagIcon({ initialSize }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size * 1.5} height={size} fill='none' viewBox='0 0 450 300'>
      <g clipPath='url(#clip0_3_2204)'>
        <path fill='#D80027' d='M172.829.96H0v299.993h450V.96H172.829z'></path>
        <path
          fill='#FFDA44'
          d='M225 64.19l19.919 61.301h64.456l-52.147 37.886 19.919 61.303L225 186.793l-52.147 37.887 19.919-61.303-52.147-37.886h64.456L225 64.191z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_3_2204'>
          <path fill='#fff' d='M0 0H450V300H0z' transform='translate(0 .956)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default VNFlagIcon
