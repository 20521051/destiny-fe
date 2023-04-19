import React, { useState } from 'react'
import { IconProps } from '../../@types/icon.type'

function StoryIcon({ initialSize }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
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
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADmUlEQVR4nO2dv04VQRTGv4uB2h4Lb/zTKlCqIfoCIl6x8TksVahUfAolGEUeAWkMxsbSC0FsrPyDitioxTGTzCbmhr27e3d2zszs90tOs1lm7nzfzJndmd0FIIQQQuKhA2AGwBKATQDbAH7Z6NtjiwCmtX9oisIvANgBICXDmNOzf0tqcArAmwrCD8ZrAF06MBoXAXyqIX4WXwFcoQnVuAzgjwPxs/gNYJYmlKML4LND8f8fCadpwnA6NXN+UWxxYh7OzQbFz+J6SqNgwoq2OnBdvm2PLdhzyvb+HQ8GmHuGJDA9aa9Eg98DmC9R3owH8bOYQsQcA/BohEYvAxgbUu6SRwPuIWJGET+Lh0PK3fRowAYiTjt1Gz+XU7aP/J+FmaOiY8Lm87qN/5AzMR96NMDU1epLxBtHlP/TowGmruh46lCAFeUUFOWl6E7DOfilRwOinIQPG87Bix4NuIOWG3BwRPnTHg04hwhpOgV17PGmxX+HSFl1KMKTnDp6Hgy4hkhZcChCL6eOjt1GbEr8VzEvR48D2HUgwl7BCunJBjdkzB5z1Mw7EOJqiXpm7TaiK/FNWZeQCMs1hLhfoZ4LDjflzR5zMozZVc2qQjwoWI7O2x/eqpnzTUpLkrmSc8JuybSTR8euwvYrXmqW2QSKnnG7sLZiBTq00bfHevYcV0zZzZSNI+ozx+4COI+EOAFgzfNKpXgK06Z1AGcQsPj7AQglDYdp4yQCZC0AccRTPEOApJh2JCd+IECkZREc2oIIDdAXRTgC9IURpqB2hAvMmtMLAF8AfLNXVyM/Eq8tiERigLnTvwXg7ZD7jJFM0BZEAjfgOIDbAD6WKNuMChoANwZ07bL69wrmmnNpAOoZYB6ffwzgr68Up50SJLAU5DvFqQsiNEBfFOEIaE8U0XT5ziuMLYqgAaAB6r1UOAL0hRKmIH2xhHNAelFE0+U7rzC2KIIGgAao91LhCNAXSpiC9MUSzgHpRRFNl++8wtiiCBoAGqDeS4UjQF8oYQrSF0s4B6QXRTRdvvMKY4siaABogHovFY4AfaGEKaidc8AMH02EqgF1Hs417wpURrtHSmAjYBA+ng5dAzL4ggZ0DRh8RWndfpTQvBnzvM5HorRTggSeghpHWxChAfqiCEeAvjDS1hR0EIAo0uaPdawHIIx4CvNpnuA4a784KInHfsj/4G3Svm6fYjo6sD0/WPEJIYQQQgghhBBCCJLgH3JVradsD4ksAAAAAElFTkSuQmCC'
        ></image>
      </defs>
    </svg>
  )
}

export default StoryIcon
