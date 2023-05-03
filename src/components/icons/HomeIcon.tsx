import React, { useState } from 'react'
import { IconProps } from '~/types/icon.type'

function HomeIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#333')
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 96 96'>
      <path fill='url(#pattern0)' d='M0 0H96V96H0z'></path>
      <defs>
        <pattern id='pattern0' width='1' height='1' patternContentUnits='objectBoundingBox'>
          <use transform='scale(.01042)' xlinkHref='#image0_1_2'></use>
        </pattern>
        <image
          id='image0_1_2'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2bsWoVYRSEJxZBCNgG7Cz0BVLZptJXMJ0vkNLW0tZ30M5aK98gVTotUqewEWxEdCRwF8LlhuzdPbv/f+bMB9MmM/8hgY/cAMYYY4wxxhiTi5NNTANOAfwE8AvAS19gXc4A/AbATf4AeO0jrMM5gL+3Hn/IPwBvfYTlOADwbsfDb+c9gAc+RCyHAD6OePwhnwA89BFiOALwZY/HH/IVwCMfYR7HAC4mPP6QSwCPfYRpPAHwfcbjD7kC8GyP73vf1yvBCYDrgMcf8gPA85Hfu/wBTjeCxeCMFbbSBzjbEqzojBG2sgc4v0OwonOfsJU7wMFIwYrOXcJW6gCHewpWdHYJW5kDHE0UrOhsC1uJA8wVLAbntrDJHyBKsBicQdikDxAtWAzOmG5pWUqwuHJSsrRg0QdoL1j0T0AfgkX/CmovWFww3dOLYLHiAXoTLC6Qm43dCta3Dh6IKwjbU3RG74LF4Fz39JFIFcHihL+wvWj9+EqCxQm52f6q1eOrCRZn/IXtzZoPrypYnJlVPhKpLFgMyIfNGy0mWJ87GMnOs8hHIisIFgNzESlsVQSLwdn3I5E7qSZY7EnYqgoWgzPpf9iqCxZbCpsFC7mEjcXTHBZPc1g8zWHxNIfF0xwWT3NYPM1h8TQn2yAm6ys3iMn6yg1isr5yg5isr9wgJusrN4jJ+soNYrK+coOYrK/cICbrKzeIyfrKDWKyvnKDmKyv3CAm6ys3iMn6yg1isr5yg5isr9wgJusrN4jJ+soNYrK+coOYrK/cICbrKzeIyfrKDWKyvnKDmKyv3CAm6ys3iMn6yg1isr5yg5isrzHGGGOMMcYYY4yBBv8B5+GR1ic8CHEAAAAASUVORK5CYII='
        ></image>
      </defs>
    </svg>
  )
}

export default HomeIcon
