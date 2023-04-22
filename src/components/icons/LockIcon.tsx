import React, { useState } from "react";
import { IconProps } from "~/types/icon.type";

function LockIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#222')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={fillColor}
        strokeLinecap="round"
        strokeWidth="2"
        d="M16 8V7a4 4 0 00-4-4v0a4 4 0 00-4 4v1"
      ></path>
      <path
        fill={fillColor}
        d="M3 13c0-2.828 0-4.243.879-5.121C4.757 7 6.172 7 9 7h6c2.828 0 4.243 0 5.121.879C21 8.757 21 10.172 21 13v1c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-1z"
      ></path>
      <circle cx="12" cy="15" r="2" fill="#fff"></circle>
    </svg>
  );
}

export default LockIcon;