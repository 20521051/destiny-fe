import React, { useState } from "react";
import { IconProps } from "~/types/icon.type";

function VisibilityIcon({ initialSize, initialFill }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" stroke="#33363F" strokeWidth="2"></circle>
      <path
        stroke="#33363F"
        strokeWidth="2"
        d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934z"
      ></path>
    </svg>
  );
}

export default VisibilityIcon;