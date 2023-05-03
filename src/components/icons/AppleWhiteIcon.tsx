import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function AppleWIcon({ initialSize }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 42 42'>
      <path
        fill='#283544'
        d='M39.052 20.729c0 10.012-8.116 18.137-18.137 18.137S2.776 30.741 2.776 20.73c0-10.021 8.116-18.138 18.137-18.138s18.138 8.117 18.138 18.138z'
      ></path>
      <path
        fill='#fff'
        d='M29.416 16.14c-.099.057-2.455 1.275-2.455 3.977.111 3.081 2.973 4.162 3.022 4.162-.049.057-.432 1.472-1.566 2.954-.9 1.277-1.9 2.564-3.418 2.564-1.444 0-1.962-.85-3.627-.85-1.79 0-2.295.85-3.665.85-1.518 0-2.591-1.356-3.54-2.621-1.234-1.656-2.283-4.254-2.32-6.748-.025-1.323.247-2.622.938-3.726.974-1.54 2.714-2.587 4.614-2.621 1.456-.046 2.751.931 3.64.931.85 0 2.442-.931 4.243-.931.778 0 2.85.219 4.134 2.058zm-8.5-2.323c-.26-1.207.456-2.415 1.122-3.185.851-.931 2.196-1.563 3.355-1.563.074 1.207-.395 2.391-1.233 3.253-.753.932-2.048 1.633-3.245 1.495z'
      ></path>
    </svg>
  )
}

export default AppleWIcon
