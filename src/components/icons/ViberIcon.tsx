import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function InstagramIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 512 512"
    >
      <path
        fill="#665CAC"
        fillRule="evenodd"
        d="M265.096.368c114.484.537 165.886 37.88 178.641 49.558 42.182 36.65 65.617 117.942 49.866 246.333-13.857 113.44-92.983 133.566-119.527 140.317-2.6.661-4.695 1.194-6.175 1.674-7.146 2.305-70.381 18.133-152.518 11.218-9.066 10.526-21.129 24.356-29.811 33.73-2.624 2.826-5.079 5.616-7.426 8.283-11.884 13.501-20.975 23.83-34.834 19.532-13.753-4.226-12.985-25.125-12.985-25.125l.077-51.557h-.077C10.157 400.524 11.924 275.974 13.307 209.435c1.307-66.539 14.215-120.17 50.865-156.82C130.02-7.777 265.096.368 265.096.368z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        d="M360.444 400.664c22.561-5.236 85.566-19.857 97.2-113.625 13.293-107.262-4.917-180.485-40.569-211.143-10.757-9.758-57.165-38.878-154.054-39.34 0 0-114.714-7.529-170.42 42.875-30.964 30.58-41.414 76.066-42.566 131.618l-.126 5.659c-1.3 56.809-3.592 156.932 94.633 184.2 0 0-.384 78.756-.461 85.671 0 4.841.768 8.145 3.534 8.836 1.998.538 4.994-.538 7.53-3.073 16.212-16.366 68.229-79.063 68.229-79.063 69.767 4.61 125.241-9.221 131.234-11.141 1.38-.44 3.366-.901 5.836-1.474z"
      ></path>
      <path
        fill="#665CAC"
        d="M318.662 206.28a6.476 6.476 0 11-12.936.625c-1.07-22.131-11.351-32.748-32.6-33.877a6.475 6.475 0 11.687-12.933c27.963 1.486 43.462 17.492 44.849 46.185z"
      ></path>
      <path
        fill="#665CAC"
        d="M345.24 224.208a6.476 6.476 0 006.621-6.327c.575-25.312-7.005-46.683-22.756-63.843-15.779-17.191-37.542-26.709-65.089-28.665a6.476 6.476 0 00-.917 12.919c24.4 1.732 43.05 9.889 56.464 24.504 13.427 14.628 19.851 32.739 19.35 54.791a6.476 6.476 0 006.327 6.621z"
      ></path>
      <path
        fill="#665CAC"
        d="M385.9 230.978a6.476 6.476 0 01-12.951.097c-.295-39.408-11.925-70.04-34.848-92.454-23.003-22.419-51.597-33.747-85.956-33.967a6.476 6.476 0 01.082-12.951c37.653.24 69.47 12.846 94.921 37.65 25.541 24.973 38.433 58.929 38.752 101.625zM288.759 288.038c-4.84 6.07-13.984 5.301-13.984 5.301-66.539-16.98-84.364-84.365-84.364-84.365s-.769-9.066 5.301-13.984l11.987-9.527c5.993-4.61 9.758-15.751 3.688-26.662-3.381-6.07-10.143-16.903-15.137-23.742-5.302-7.222-17.595-21.975-17.672-22.051-5.916-7.069-14.675-8.683-23.896-3.919 0 0-.076.077-.153.077-8.759 4.917-16.904 11.525-24.511 19.9l-.153.154c-5.686 6.838-8.99 13.6-9.758 20.207-.154.769-.231 1.768-.154 2.92-.077 2.92.384 5.763 1.306 8.606l.308.23c2.842 10.219 10.065 27.2 25.662 55.552 10.143 18.363 20.515 33.73 30.811 46.639 5.379 6.838 11.525 13.83 18.594 20.976l2.766 2.766c7.146 7.068 14.138 13.215 20.976 18.594 12.909 10.296 28.199 20.668 46.639 30.81 28.352 15.598 45.333 22.82 55.552 25.663l.23.308c2.843.922 5.686 1.306 8.606 1.306 1.152.077 2.151 0 2.919-.154 6.608-.768 13.37-4.072 20.208-9.758l.154-.154c8.375-7.606 14.983-15.828 19.9-24.51 0 0 .077-.077.077-.154 4.764-9.22 3.15-17.979-3.919-23.895 0 0-14.829-12.371-22.051-17.672-6.762-4.995-17.672-11.679-23.742-15.137-10.911-6.07-22.052-2.305-26.662 3.688l-9.528 11.987z"
      ></path>
    </svg>
  );
}

export default ViberIcon;