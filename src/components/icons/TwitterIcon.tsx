import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function TwitterIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#1DA1F2"
        d="M15.095 43.501c18.113 0 28.02-15.006 28.02-28.02 0-.426 0-.85-.028-1.273A20.036 20.036 0 0048 9.11a19.632 19.632 0 01-5.656 1.55 9.88 9.88 0 004.33-5.447 19.73 19.73 0 01-6.254 2.39 9.857 9.857 0 00-16.783 8.982A27.96 27.96 0 013.341 6.295 9.855 9.855 0 006.39 19.443a9.761 9.761 0 01-4.47-1.233v.125a9.851 9.851 0 007.9 9.654 9.832 9.832 0 01-4.446.169 9.861 9.861 0 009.2 6.839A19.759 19.759 0 010 39.078a27.883 27.883 0 0015.095 4.416"
      ></path>
    </svg>
  );
}

export default TwitterIcon;
