import React, { useState } from 'react'
import { IconProps } from '../../@types/icon.type'

function RankingIcon({ initialSize }: IconProps) {
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
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO2cSWgVQRCGK0bFaMSTiR4UPIhICK45CZHoSXFDCOpJcA+iiBeNEvBgREUiimcVRREJLhc1Cp7iEkWNRAU9iAHRgwtuYBZNSeOEhGFmuobX70118n/w36a7q/6a6ZnumfeIAAAAAAAAAAAAAAAYgCHKxYOcQQEIBWCPTwRcAeR5AboVnEXsqbpcFOCLgkTYU31yUYB3ChJhT/XWRQE6FCTCnuq5iwLctgzyWtBHpwIzOKXMlW/jjaWPmw78p5OWQf4QUYmlj5cKDOWUMld+EiVB7kl9HHdRgO2CYOda+nigwFBOqfuWnKoEfdS5KMBiwUA7LH3cUWAop1SLJaddgj5qXBRgPBH1Wga6bOnjigJDOaWaLTk1W9r3EFEpOeKhZbAflvvAOQWGckqdTshnDBF9t7RvJYccEgS8KqH9KQWGckqZh484VgvaH3RZgGrBgBcT2h9QYCinVENCPpcE7Re4LECRYEX8i4jGxbTfosBQTqmNMbmMDXJNatsZeOaUozkEvUyBoZxSS2Ny2SRoe5jyQKVgYLMqLo5oO0+BoZxSsyPyKBasfvuIqILyxF1B4LUR7SYrMJRTqiwij7WCdmbrJm8sFwTQHjH/jRCsJViReoKYwzwRtF2SzwKYoF4Jgljj+bb224j41wn3j5zffMPUCgL5SEQTQu1aFBjLQt2I2A14n+NayBmmwm2CYI6F2p1QYCwL1RSKvUnQ5nEhzv5+aoK7fVJAvcGTUz91CoxlobYOirtScP8yXiykAnNekMhTIhoVHL9IgbEsVL+ZI4nokeD4M5QBZcIX9g0ePoqWBzE3CI79TEQTKSM2CwLsDRZihg8KzGWLTIyGWcJPcuJW/wWhKNh2tQX5LJiKriswmC26GsTaLji2tZA33jgqgg+QbMHuJ6J9Cgxmi+qDWG3HdeVzyyEt9cKAdyowmC0yT2u/BcftIUVInxZ8+MaoQ3BMW5CzKmYKzxzf1aVp6gkjmTt9115SzGjhZp2vejFoYamWasE2hY/qc/Wdj5ZtCvZMZ8kjygUvrtkj/Yx5Q6aaIwqMY0dqJA+ZFLzaY8/V7ePZ7/M3oZzyG1HVbFBgIOeo9eQxMxQYyDlqOnlMqSDBvgzNlYwd97nlkOFahgUw96hhT1WGBTBjA8rmJ0y34PwAc4job4Hn/vmDxgdEdKGABTA/mQIhphZo/8js60wJDw7+s7sABTDvpUEMxXn+Ufe9mM/OQWgq+poH878R0bTBA4F4Vgr+hyGNTF8rEsYDEWzDvJ89jQ6K4PQH0wAAAAAAAADgI6xcQ56sDWYUIHuTGVdA9kYzpiBSqSFP1gYzCpC9yYwrIHujebhOQQAAAAAAAAAAAACAMuEfKxYewd0w0MkAAAAASUVORK5CYII='
        ></image>
      </defs>
    </svg>
  )
}

export default RankingIcon
