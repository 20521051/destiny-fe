import React, { useState } from "react";
import { SizeProps } from "../../@types/props.type";

function DarkModeIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path fill="url(#pattern0)" d="M0 0H96V96H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01042)" xlinkHref="#image0_1_2"></use>
        </pattern>
        <image
          id="image0_1_2"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEL0lEQVR4nO2dW4hVVRjHf5YzJYKWWl5IJQoTfPNB1LygIiEiqJQGvaSVaIqoUa9CD+aTooiieM2nEFG8IBJRoPg0lVI6eEHFSzQoXvCGovPJhk84x7P3mTPOXpdz9veDP8zDYTjr/99n77XWt9baYBiGYRiGYRiGETd9gU+A74CtwK/Av0AbcAsQoF3/Phr6yzYCPYDpwCagVc2VGpV8dljoBtQjrwFTgZ+B+50wPE2rQjemnugJLAbOddH0Ul0HXg/dsNhpUuP/z9H4RJeBRUD30A2MmTnA+ZyNT25bS4Hm0I2LmYHAoZyNT3Qc+DB042LnM+CmA/N36O3MyKBZ++7iQCvN9Y4HUL87Mn+VmV+dj4BLjszfAXSzALJJHojXHJl/CnjTzM9mqMMr/57+sowM+utASBxpoTmfTdIV/MOh+X/Z9EJ1tjg0X4CxdvVn86Vj84+Y+dkMKimKuNJ4CyCbA47NP2HmZ/O5Y/MF+MYCyO71XHBs/kPgLQsgncUerv49Zn520dzVVIOUaJ4FkM63Hsxv1wKOkcIpDwG0mvPpfOzBfAF2WwDp7PQUwAoLIL3redtTANMsgEomezJfgBEWQCVrPAbQ2wKopNWT+c/M/Ep6dXKVclenIIyXmOjx9nPb3K9kuccAHloAlWzzGIAAb1gI5RzxHEB/C6Cck54DGGMBlJP3RgrpQPMtgHIeew5grQUQNoCTFkA5jzwH0G4FmXIeeA5AbC1oOTcCBPC33Yb8liElRdYdDTQQE5Wd/aC42mgnNSgpBBWeHwIGcNrmhmBSwAAE+LHoP4FeWqkKFcATXRJTaHyVJCVDV4F3KDDrAwcgug+tsLUCn8tSpIr2F3XDXpOH7UhSo7boKVuFY1cE5kvJ+tHCHczka3Gu1KhD2kMrFC0RGC8lOgsMp0B8FYHp8pLuAgso0Bal/yIwXVKUbJsdQgFYEoHZUmVh1+pGfzYkR5FdjMBsqaI2PdbsXYceBF2/NDMCk6UGPdIu64ycRtGjgQ16COH50Evp90dgsHRCd4B9wPd6BkWfDtqXbBQfqfuif8l49u0NeYTa4IhGx/KKeqATjS0l+kd7VrX+j2UEZHYEJkpgfUFgNkVgggTSRiKZqPstAjPEs47FND3eN+dj6CVyndM2R8XgOhgfSA66ArxPpHyg5UNpUF3VNkZ/gOuZCMySnHWhHsx/QR99SEmD6DjQjzqju06M+dpjLI60ud7fzvGpoxc4iGMlo/y5NAgDdB5G6kSHgfdoQGZoGVEiVXIA+SwanCYt6lyJwPDS+sGymEa2PmgGvtbZx1DGt+h3SF4qV2jG6D6Em57qAtuBUaEbHWvXdYoeEPUn8DQHw9t1z9lPwIQiLujqCr31uJwlOu19UM28rt3Ex1p2bNMSYYtuqVqnS1XGAW+HboRhGIZhGIZhGBSa5yU2Cufgf1kwAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}

export default DarkModeIcon;