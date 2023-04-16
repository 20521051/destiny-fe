import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function DestinyIcon({ initialSize }: SizeProps) {
  const [size, setSize] = useState<number>(initialSize || 120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1"
      viewBox="0 0 375 375"
    >
      <defs>
        <clipPath id="441d527a18">
          <path d="M63.75 249H179v126H63.75zm0 0"></path>
        </clipPath>
        <clipPath id="4a63f2669b">
          <path d="M63.75 99H179v167H63.75zm0 0"></path>
        </clipPath>
        <clipPath id="ec233f8c4d">
          <path d="M196 0h115.25v230H196zm0 0"></path>
        </clipPath>
        <clipPath id="52ba56c929">
          <path d="M196 211h115.25v164H196zm0 0"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#441d527a18)">
        <path
          fill="#ffb400"
          fillRule="evenodd"
          d="M178.36 374.977v-97.008l-49.864-28.781-64.746 37.394v22.211l61.875 35.738zm0 0"
        ></path>
      </g>
      <g clipPath="url(#4a63f2669b)">
        <path
          fill="#f60"
          fillRule="evenodd"
          d="M63.75 265.504l46.54-26.895 15.335-8.84 14.277-8.234 38.457-22.21V99.671l-52.734 30.45-61.875 35.733zm0 0"
        ></path>
      </g>
      <g clipPath="url(#ec233f8c4d)">
        <path
          fill="#9047ff"
          fillRule="evenodd"
          d="M311.25 68.848V.023l-59.61 34.45-55 31.734v133.117l52.735 30.446.453.226 61.422-35.434zm0 0"
        ></path>
      </g>
      <g clipPath="url(#52ba56c929)">
        <path
          fill="#18b0f7"
          fillRule="evenodd"
          d="M249.375 247.523l-52.734 30.446v97.008l52.734-30.446 61.875-35.738v-97.004l-46.465 26.82zm0 0"
        ></path>
      </g>
    </svg>
  );
}

export default DestinyIcon;
