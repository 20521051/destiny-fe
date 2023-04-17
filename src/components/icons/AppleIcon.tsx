import React, { useState } from "react";
import { SizeProps } from "../../@types/props.type";

function AppleIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#clip0_17_53)">
        <path
          fill="#000"
          d="M43.584 37.407a26.1 26.1 0 01-2.58 4.64c-1.358 1.935-2.469 3.274-3.325 4.018-1.327 1.22-2.75 1.846-4.273 1.881-1.093 0-2.411-.311-3.946-.942-1.54-.628-2.955-.94-4.249-.94-1.357 0-2.812.312-4.369.94-1.559.63-2.815.96-3.775.992-1.46.063-2.916-.58-4.37-1.931-.927-.81-2.086-2.196-3.476-4.16-1.491-2.098-2.717-4.53-3.677-7.304C4.516 31.606 4 28.705 4 25.897c0-3.217.695-5.991 2.087-8.316 1.095-1.868 2.55-3.34 4.372-4.422a11.761 11.761 0 015.91-1.668c1.16 0 2.681.359 4.572 1.064 1.885.707 3.095 1.066 3.626 1.066.396 0 1.741-.42 4.02-1.256 2.156-.776 3.975-1.097 5.465-.97 4.039.326 7.073 1.918 9.09 4.786-3.611 2.188-5.398 5.253-5.362 9.185.032 3.063 1.143 5.612 3.327 7.635.99.94 2.095 1.665 3.324 2.181a35.927 35.927 0 01-.847 2.225zM34.322.961c0 2.4-.877 4.642-2.625 6.716-2.11 2.467-4.661 3.892-7.428 3.667a7.465 7.465 0 01-.056-.91c0-2.304 1.003-4.77 2.785-6.787.89-1.021 2.02-1.87 3.392-2.547C31.76.433 33.054.064 34.272 0c.035.321.05.642.05.96z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_17_53">
          <path fill="#fff" d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default AppleIcon;
