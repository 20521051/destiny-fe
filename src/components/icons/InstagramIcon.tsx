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
        fill="url(#paint0_linear_1_921)"
        fillRule="evenodd"
        d="M124.541 256.001c0-72.604 58.856-131.46 131.46-131.46 72.602 0 131.458 58.856 131.458 131.46 0 72.602-58.856 131.458-131.458 131.458-72.604 0-131.46-58.856-131.46-131.458zM256 341.333c-47.129 0-85.333-38.204-85.333-85.332 0-47.13 38.204-85.334 85.333-85.334 47.128 0 85.333 38.204 85.333 85.334 0 47.128-38.205 85.332-85.333 85.332z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint1_radial_1_921)"
        fillRule="evenodd"
        d="M124.541 256.001c0-72.604 58.856-131.46 131.46-131.46 72.602 0 131.458 58.856 131.458 131.46 0 72.602-58.856 131.458-131.458 131.458-72.604 0-131.46-58.856-131.46-131.458zM256 341.333c-47.129 0-85.333-38.204-85.333-85.332 0-47.13 38.204-85.334 85.333-85.334 47.128 0 85.333 38.204 85.333 85.334 0 47.128-38.205 85.332-85.333 85.332z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint2_linear_1_921)"
        d="M392.653 150.066c16.967 0 30.721-13.753 30.721-30.719 0-16.967-13.754-30.72-30.721-30.72-16.965 0-30.719 13.753-30.719 30.72 0 16.966 13.754 30.719 30.719 30.719z"
      ></path>
      <path
        fill="url(#paint3_radial_1_921)"
        d="M392.653 150.066c16.967 0 30.721-13.753 30.721-30.719 0-16.967-13.754-30.72-30.721-30.72-16.965 0-30.719 13.753-30.719 30.72 0 16.966 13.754 30.719 30.719 30.719z"
      ></path>
      <path
        fill="url(#paint4_linear_1_921)"
        fillRule="evenodd"
        d="M256.001 0c-69.526 0-78.244.295-105.549 1.54-27.249 1.243-45.858 5.571-62.142 11.9-16.834 6.541-31.11 15.295-45.343 29.527C28.735 57.2 19.98 71.476 13.44 88.31c-6.329 16.284-10.657 34.893-11.9 62.142C.296 177.757 0 186.475 0 256.001c0 69.524.295 78.242 1.54 105.547 1.243 27.249 5.571 45.858 11.9 62.142 6.541 16.834 15.295 31.11 29.527 45.343 14.233 14.232 28.509 22.986 45.343 29.528 16.284 6.328 34.893 10.656 62.142 11.898 27.305 1.246 36.023 1.541 105.549 1.541 69.524 0 78.242-.295 105.547-1.541 27.249-1.242 45.858-5.57 62.142-11.898 16.834-6.542 31.11-15.296 45.343-29.528 14.232-14.233 22.986-28.509 29.528-45.343 6.328-16.284 10.656-34.893 11.898-62.142 1.246-27.305 1.541-36.023 1.541-105.547 0-69.526-.295-78.244-1.541-105.549-1.242-27.249-5.57-45.858-11.898-62.142-6.542-16.834-15.296-31.11-29.528-45.343C454.8 28.735 440.524 19.98 423.69 13.44c-16.284-6.329-34.893-10.657-62.142-11.9C334.243.296 325.525 0 256.001 0zm0 46.126c68.354 0 76.451.261 103.445 1.493 24.96 1.138 38.515 5.308 47.536 8.814 11.949 4.644 20.477 10.192 29.435 19.15 8.958 8.958 14.506 17.486 19.15 29.436 3.506 9.02 7.676 22.575 8.814 47.535 1.232 26.994 1.493 35.091 1.493 103.447 0 68.354-.261 76.451-1.493 103.445-1.138 24.96-5.308 38.515-8.814 47.535-4.644 11.95-10.192 20.478-19.15 29.436-8.958 8.958-17.486 14.506-29.435 19.15-9.021 3.506-22.576 7.676-47.536 8.814-26.99 1.232-35.086 1.493-103.445 1.493-68.361 0-76.456-.261-103.447-1.493-24.96-1.138-38.515-5.308-47.535-8.814-11.95-4.644-20.478-10.192-29.436-19.15-8.957-8.958-14.506-17.486-19.15-29.436-3.505-9.02-7.676-22.575-8.814-47.535-1.232-26.994-1.493-35.091-1.493-103.445 0-68.356.261-76.453 1.493-103.447 1.138-24.96 5.309-38.515 8.814-47.535 4.644-11.95 10.192-20.478 19.15-29.436 8.958-8.958 17.486-14.506 29.436-19.15 9.02-3.506 22.575-7.676 47.535-8.814 26.994-1.232 35.091-1.493 103.447-1.493z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint5_radial_1_921)"
        fillRule="evenodd"
        d="M256.001 0c-69.526 0-78.244.295-105.549 1.54-27.249 1.243-45.858 5.571-62.142 11.9-16.834 6.541-31.11 15.295-45.343 29.527C28.735 57.2 19.98 71.476 13.44 88.31c-6.329 16.284-10.657 34.893-11.9 62.142C.296 177.757 0 186.475 0 256.001c0 69.524.295 78.242 1.54 105.547 1.243 27.249 5.571 45.858 11.9 62.142 6.541 16.834 15.295 31.11 29.527 45.343 14.233 14.232 28.509 22.986 45.343 29.528 16.284 6.328 34.893 10.656 62.142 11.898 27.305 1.246 36.023 1.541 105.549 1.541 69.524 0 78.242-.295 105.547-1.541 27.249-1.242 45.858-5.57 62.142-11.898 16.834-6.542 31.11-15.296 45.343-29.528 14.232-14.233 22.986-28.509 29.528-45.343 6.328-16.284 10.656-34.893 11.898-62.142 1.246-27.305 1.541-36.023 1.541-105.547 0-69.526-.295-78.244-1.541-105.549-1.242-27.249-5.57-45.858-11.898-62.142-6.542-16.834-15.296-31.11-29.528-45.343C454.8 28.735 440.524 19.98 423.69 13.44c-16.284-6.329-34.893-10.657-62.142-11.9C334.243.296 325.525 0 256.001 0zm0 46.126c68.354 0 76.451.261 103.445 1.493 24.96 1.138 38.515 5.308 47.536 8.814 11.949 4.644 20.477 10.192 29.435 19.15 8.958 8.958 14.506 17.486 19.15 29.436 3.506 9.02 7.676 22.575 8.814 47.535 1.232 26.994 1.493 35.091 1.493 103.447 0 68.354-.261 76.451-1.493 103.445-1.138 24.96-5.308 38.515-8.814 47.535-4.644 11.95-10.192 20.478-19.15 29.436-8.958 8.958-17.486 14.506-29.435 19.15-9.021 3.506-22.576 7.676-47.536 8.814-26.99 1.232-35.086 1.493-103.445 1.493-68.361 0-76.456-.261-103.447-1.493-24.96-1.138-38.515-5.308-47.535-8.814-11.95-4.644-20.478-10.192-29.436-19.15-8.957-8.958-14.506-17.486-19.15-29.436-3.505-9.02-7.676-22.575-8.814-47.535-1.232-26.994-1.493-35.091-1.493-103.445 0-68.356.261-76.453 1.493-103.447 1.138-24.96 5.309-38.515 8.814-47.535 4.644-11.95 10.192-20.478 19.15-29.436 8.958-8.958 17.486-14.506 29.436-19.15 9.02-3.506 22.575-7.676 47.535-8.814 26.994-1.232 35.091-1.493 103.447-1.493z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_921"
          x1="29.874"
          x2="191.303"
          y1="26.917"
          y2="651.345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E60D3"></stop>
          <stop offset="0.143" stopColor="#913BAF"></stop>
          <stop offset="0.761" stopColor="#D52D88"></stop>
          <stop offset="1" stopColor="#F26D4F"></stop>
        </linearGradient>
        <radialGradient
          id="paint1_radial_1_921"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(404.81 254.52894 -183.17641 291.32893 155.005 512)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED276"></stop>
          <stop offset="0.17" stopColor="#FDBD61" stopOpacity="0.975"></stop>
          <stop offset="0.454" stopColor="#F6804D"></stop>
          <stop offset="1" stopColor="#E83D5C" stopOpacity="0.01"></stop>
        </radialGradient>
        <linearGradient
          id="paint2_linear_1_921"
          x1="29.874"
          x2="191.303"
          y1="26.917"
          y2="651.345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E60D3"></stop>
          <stop offset="0.143" stopColor="#913BAF"></stop>
          <stop offset="0.761" stopColor="#D52D88"></stop>
          <stop offset="1" stopColor="#F26D4F"></stop>
        </linearGradient>
        <radialGradient
          id="paint3_radial_1_921"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(404.81 254.52894 -183.17641 291.32893 155.005 512)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED276"></stop>
          <stop offset="0.17" stopColor="#FDBD61" stopOpacity="0.975"></stop>
          <stop offset="0.454" stopColor="#F6804D"></stop>
          <stop offset="1" stopColor="#E83D5C" stopOpacity="0.01"></stop>
        </radialGradient>
        <linearGradient
          id="paint4_linear_1_921"
          x1="29.874"
          x2="191.303"
          y1="26.917"
          y2="651.345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E60D3"></stop>
          <stop offset="0.143" stopColor="#913BAF"></stop>
          <stop offset="0.761" stopColor="#D52D88"></stop>
          <stop offset="1" stopColor="#F26D4F"></stop>
        </linearGradient>
        <radialGradient
          id="paint5_radial_1_921"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(404.81 254.52894 -183.17641 291.32893 155.005 512)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED276"></stop>
          <stop offset="0.17" stopColor="#FDBD61" stopOpacity="0.975"></stop>
          <stop offset="0.454" stopColor="#F6804D"></stop>
          <stop offset="1" stopColor="#E83D5C" stopOpacity="0.01"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default InstagramIcon;