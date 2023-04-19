import React, { useState } from "react";
import { SizeProps } from "../../@types/icon.type";

function TelegramIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#clip0_318_61)">
        <path
          fill="url(#paint0_linear_318_61)"
          d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M10.864 23.747c6.996-3.049 11.662-5.058 13.996-6.03 6.665-2.771 8.05-3.253 8.953-3.269.198-.003.642.046.93.28.242.196.31.462.341.65.032.186.072.611.04.944-.36 3.795-1.924 13.004-2.719 17.255-.336 1.798-.998 2.401-1.64 2.46-1.394.129-2.452-.92-3.802-1.806-2.112-1.384-3.305-2.246-5.356-3.597-2.37-1.562-.833-2.42.517-3.823.354-.367 6.494-5.952 6.613-6.459.015-.063.029-.3-.111-.424-.14-.125-.348-.082-.497-.049-.212.049-3.587 2.279-10.124 6.692-.957.657-1.825.978-2.602.961-.857-.018-2.506-.485-3.731-.883-1.503-.488-2.698-.747-2.594-1.576.055-.433.65-.875 1.786-1.326z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_318_61"
          x1="24"
          x2="24"
          y1="0"
          y2="47.644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AABEE"></stop>
          <stop offset="1" stopColor="#229ED9"></stop>
        </linearGradient>
        <clipPath id="clip0_318_61">
          <path fill="#fff" d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default TelegramIcon;