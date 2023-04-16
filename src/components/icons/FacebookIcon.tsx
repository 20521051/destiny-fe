import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function FacebookIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#clip0_17_24)">
        <path
          fill="#1877F2"
          d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
        ></path>
        <path
          fill="#fff"
          d="M33.342 30.938L34.406 24H27.75v-4.5c0-1.898.93-3.75 3.911-3.75h3.026V9.844s-2.746-.469-5.372-.469c-5.482 0-9.065 3.322-9.065 9.337V24h-6.094v6.938h6.094v16.77c2.485.39 5.015.39 7.5 0v-16.77h5.592z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_17_24">
          <path fill="#fff" d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
