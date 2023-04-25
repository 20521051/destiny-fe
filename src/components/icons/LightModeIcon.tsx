import React, { useState } from 'react'
import { IconProps } from '../../types/icon.type'

function LightModeIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#fff')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 41 41'>
      <path
        fill={fillColor}
        fillRule='evenodd'
        d='M20.186 3.582c.92 0 1.667.747 1.667 1.667v3.333a1.667 1.667 0 01-3.334 0V5.25c0-.92.747-1.667 1.667-1.667zm11.785 4.882c.651.65.651 1.706 0 2.357l-2.357 2.357a1.667 1.667 0 01-2.357-2.357l2.357-2.357c.651-.65 1.706-.65 2.357 0zm-23.57 0c.651-.65 1.706-.65 2.357 0l2.357 2.357a1.667 1.667 0 01-2.357 2.357l-2.357-2.357a1.667 1.667 0 010-2.357zm11.785 7.618a4.167 4.167 0 100 8.334 4.167 4.167 0 000-8.334zm-7.5 4.167a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm-9.166 0c0-.92.746-1.666 1.666-1.666H8.52a1.667 1.667 0 110 3.333H5.186c-.92 0-1.666-.746-1.666-1.667zm26.666 0c0-.92.746-1.666 1.667-1.666h3.333a1.667 1.667 0 110 3.333h-3.333c-.92 0-1.667-.746-1.667-1.667zm-17.07 7.071c.65.651.65 1.706 0 2.357l-2.358 2.357a1.667 1.667 0 11-2.357-2.357l2.357-2.357c.651-.65 1.706-.65 2.357 0zm14.141 0c.651-.65 1.706-.65 2.357 0l2.357 2.357a1.667 1.667 0 11-2.357 2.357l-2.357-2.357a1.667 1.667 0 010-2.357zm-7.07 2.93c.92 0 1.666.745 1.666 1.666v3.333a1.667 1.667 0 11-3.334 0v-3.333c0-.92.747-1.667 1.667-1.667z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default LightModeIcon
