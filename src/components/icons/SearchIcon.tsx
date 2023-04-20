import React, { useEffect, useState } from 'react'
import { IconProps } from '../../types/icon.type'

function SearchIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [hovered, setHovered] = useState<boolean>(false)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#717171')
  const handleMouseLeave = () => {
    setHovered(false)
  }
  const handleMouseEnter = () => {
    setHovered(true)
  }
  useEffect(() => {
    hovered ? setFillColor('#333') : setFillColor('#717171')
  }, [hovered])
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 256 256'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        fill={fillColor}
        strokeMiterlimit='10'
        d='M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 006.322-2.264l5.971 5.971a1 1 0 101.414-1.414l-5.97-5.97A9.947 9.947 0 0023 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z'
        fontFamily='none'
        fontSize='none'
        fontWeight='none'
        textAnchor='none'
        transform='scale(8.53333)'
      ></path>
    </svg>
  )
}

export default SearchIcon
