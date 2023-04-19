import React, { useState } from 'react'
import { IconProps } from '../../@types/icon.type'

function PinterestIcon({ initialSize }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 48 48'>
      <g clipPath='url(#clip0_17_34)'>
        <path fill='#fff' d='M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z'></path>
        <path
          fill='#E60019'
          d='M24 0C10.746 0 0 10.746 0 24c0 10.173 6.321 18.864 15.25 22.36-.218-1.896-.396-4.82.078-6.893.435-1.877 2.805-11.931 2.805-11.931s-.71-1.442-.71-3.556c0-3.338 1.935-5.827 4.345-5.827 2.054 0 3.042 1.54 3.042 3.378 0 2.054-1.304 5.136-1.995 8-.573 2.39 1.205 4.346 3.555 4.346 4.267 0 7.546-4.504 7.546-10.983 0-5.748-4.128-9.758-10.034-9.758-6.835 0-10.845 5.116-10.845 10.41 0 2.054.79 4.266 1.778 5.471a.714.714 0 01.158.692c-.178.75-.593 2.39-.672 2.726-.098.434-.355.533-.81.316-3.002-1.403-4.879-5.768-4.879-9.304 0-7.565 5.492-14.519 15.862-14.519 8.316 0 14.795 5.926 14.795 13.867 0 8.277-5.215 14.933-12.444 14.933-2.43 0-4.721-1.264-5.492-2.765l-1.5 5.709c-.534 2.093-1.996 4.7-2.984 6.3a24.104 24.104 0 007.111 1.067c13.255 0 24-10.745 24-24C48 10.747 37.255 0 24 0z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_17_34'>
          <path fill='#fff' d='M0 0H48V48H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default PinterestIcon
