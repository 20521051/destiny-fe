import React, { useState } from "react";
import { IconProps } from "~/types/icon.type";

function CHPlay({ initialSize, initialFill, initialColor, initialBorderColor }: IconProps) {
  const [size, setSize] = useState<number>(initialSize || 120)
  const [fillColor, setFillColor] = useState<string>(initialFill || '#000')
  const [textColor, setTextColor] = useState<string>(initialColor || '#fff')
  const [borderColor, setBorderColor] = useState<string>(initialBorderColor || '#A6A6A6')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 13/45}
      fill="none"
      viewBox="0 0 180 52"
    >
      <path
        fill={fillColor}
        d="M173.333 52H6.667C3.002 52 0 49.073 0 45.5v-39C0 2.927 3.002 0 6.667 0h166.666C176.998 0 180 2.927 180 6.5v39c0 3.573-3.002 6.5-6.667 6.5z"
      ></path>
      <path
        fill={borderColor}
        d="M173.333 1.042c3.087 0 5.599 2.449 5.599 5.458v39c0 3.01-2.512 5.458-5.599 5.458H6.667c-3.087 0-5.599-2.448-5.599-5.458v-39c0-3.01 2.512-5.458 5.599-5.458h166.666zm0-1.042H6.667C3.002 0 0 2.927 0 6.5v39C0 49.073 3.002 52 6.667 52h166.666c3.665 0 6.667-2.927 6.667-6.5v-39c0-3.573-3.002-6.5-6.667-6.5z"
      ></path>
      <path
        fill={textColor}
        stroke={textColor}
        strokeMiterlimit="10"
        strokeWidth="0.16"
        d="M63.223 13.317c0 1.085-.333 1.955-.99 2.603-.755.769-1.738 1.156-2.943 1.156-1.152 0-2.135-.394-2.942-1.169-.808-.786-1.211-1.752-1.211-2.907s.403-2.12 1.211-2.9c.807-.782 1.79-1.175 2.942-1.175.573 0 1.12.115 1.642.33.52.215.943.508 1.25.869l-.697.685c-.535-.615-1.263-.92-2.195-.92-.84 0-1.568.287-2.187.864-.611.578-.918 1.327-.918 2.247 0 .92.307 1.675.918 2.254.619.57 1.347.863 2.187.863.892 0 1.642-.293 2.233-.87.39-.381.612-.908.67-1.58H59.29v-.94h3.873c.047.203.06.4.06.59v0zM69.368 10.06H65.73v2.47h3.28v.94h-3.28v2.47h3.638v.957H64.7V9.103h4.668v.957zM73.705 16.897h-1.03V10.06h-2.232v-.957h5.495v.957h-2.233v6.837zM79.915 16.897V9.103h1.028v7.794h-1.028zM85.502 16.897H84.48V10.06h-2.24v-.957h5.502v.957h-2.24v6.837zM98.145 15.894c-.788.788-1.765 1.182-2.93 1.182-1.172 0-2.148-.394-2.937-1.182-.786-.786-1.178-1.752-1.178-2.894 0-1.142.392-2.108 1.178-2.894.789-.788 1.765-1.181 2.937-1.181 1.158 0 2.135.393 2.923 1.187.794.793 1.185 1.752 1.185 2.888 0 1.142-.391 2.108-1.178 2.894zm-5.105-.653c.593.583 1.315.876 2.175.876.853 0 1.582-.293 2.168-.876.592-.583.892-1.333.892-2.241 0-.908-.3-1.658-.892-2.24-.586-.584-1.315-.877-2.168-.877-.86 0-1.582.293-2.175.876-.592.583-.892 1.333-.892 2.241 0 .908.3 1.658.892 2.24v0zM100.768 16.897V9.103h1.25l3.887 6.062h.045l-.045-1.499V9.103h1.028v7.794h-1.073l-4.07-6.36h-.045l.045 1.504v4.856h-1.022v0z"
      ></path>
      <path
        fill={textColor}
        d="M90.847 28.278c-3.132 0-5.69 2.324-5.69 5.53 0 3.18 2.558 5.528 5.69 5.528 3.138 0 5.696-2.348 5.696-5.528 0-3.206-2.558-5.53-5.696-5.53zm0 8.88c-1.719 0-3.197-1.382-3.197-3.35 0-1.994 1.478-3.352 3.197-3.352 1.718 0 3.203 1.358 3.203 3.352 0 1.968-1.485 3.35-3.203 3.35zm-12.415-8.88c-3.139 0-5.69 2.324-5.69 5.53 0 3.18 2.551 5.528 5.69 5.528 3.136 0 5.69-2.348 5.69-5.528 0-3.206-2.554-5.53-5.69-5.53zm0 8.88c-1.72 0-3.204-1.382-3.204-3.35 0-1.994 1.484-3.352 3.204-3.352 1.718 0 3.196 1.358 3.196 3.352 0 1.968-1.478 3.35-3.196 3.35zm-14.774-7.185v2.35h5.755c-.168 1.313-.618 2.278-1.308 2.95-.84.813-2.148 1.715-4.447 1.715-3.541 0-6.315-2.787-6.315-6.24 0-3.453 2.774-6.24 6.315-6.24 1.915 0 3.309.73 4.337 1.676l1.698-1.656c-1.438-1.34-3.351-2.368-6.035-2.368-4.856 0-8.938 3.853-8.938 8.588 0 4.735 4.082 8.588 8.938 8.588 2.625 0 4.597-.838 6.147-2.411 1.588-1.549 2.083-3.726 2.083-5.484a7.67 7.67 0 00-.13-1.468h-8.1zm60.41 1.822c-.468-1.237-1.913-3.517-4.856-3.517-2.917 0-5.345 2.241-5.345 5.53 0 3.097 2.403 5.528 5.625 5.528a5.653 5.653 0 004.726-2.45l-1.933-1.256c-.645.92-1.523 1.529-2.793 1.529-1.262 0-2.167-.564-2.747-1.675l7.585-3.06-.262-.63zm-7.733 1.84a3.068 3.068 0 012.962-3.223c.99 0 1.83.483 2.11 1.173l-5.072 2.05zM110.17 39h2.493V22.75h-2.493V39zm-4.083-9.49h-.084c-.56-.647-1.628-1.232-2.981-1.232-2.84 0-5.437 2.431-5.437 5.548 0 3.099 2.597 5.51 5.437 5.51 1.353 0 2.421-.59 2.981-1.256h.084v.793c0 2.114-1.159 3.25-3.027 3.25-1.523 0-2.468-1.072-2.858-1.974l-2.169.882c.625 1.466 2.28 3.27 5.027 3.27 2.923 0 5.39-1.677 5.39-5.758v-9.928h-2.363v.895zm-2.852 7.649c-1.718 0-3.157-1.402-3.157-3.333 0-1.948 1.439-3.37 3.157-3.37 1.693 0 3.028 1.422 3.028 3.37 0 1.93-1.335 3.333-3.028 3.333zm32.507-14.409h-5.964V39h2.487v-6.157h3.477c2.761 0 5.47-1.949 5.47-5.047s-2.715-5.046-5.47-5.046zm.065 7.832h-3.542V25.01h3.542c1.856 0 2.916 1.503 2.916 2.786 0 1.257-1.06 2.787-2.916 2.787zm15.371-2.335c-1.796 0-3.665.774-4.433 2.488l2.207.902c.475-.902 1.348-1.194 2.271-1.194 1.29 0 2.599.755 2.619 2.09v.17c-.45-.253-1.414-.629-2.599-.629-2.376 0-4.798 1.276-4.798 3.657 0 2.177 1.947 3.58 4.135 3.58 1.673 0 2.597-.737 3.177-1.593h.085v1.256h2.401v-6.233c0-2.882-2.206-4.494-5.065-4.494zm-.3 8.905c-.813 0-1.946-.393-1.946-1.376 0-1.258 1.413-1.74 2.636-1.74 1.095 0 1.609.235 2.274.546-.195 1.504-1.524 2.57-2.964 2.57zm14.115-8.549l-2.858 7.045h-.085l-2.955-7.045h-2.682l4.44 9.844-2.533 5.478h2.598l6.842-15.322h-2.767zM142.578 39h2.494V22.75h-2.494V39z"
      ></path>
      <path
        fill="url(#paint0_linear_1_33)"
        d="M13.913 9.8c-.391.4-.618 1.022-.618 1.829v28.749c0 .806.227 1.428.618 1.828l.097.088L30.533 26.19v-.38L14.01 9.706l-.097.094z"
      ></path>
      <path
        fill="url(#paint1_linear_1_33)"
        d="M36.035 31.56l-5.502-5.37v-.38l5.509-5.37.123.07 6.523 3.618c1.862 1.027 1.862 2.717 0 3.75l-6.523 3.613-.13.07z"
      ></path>
      <path
        fill="url(#paint2_linear_1_33)"
        d="M36.165 31.49L30.533 26l-16.62 16.206c.619.634 1.627.71 2.774.076l19.478-10.791"
      ></path>
      <path
        fill="url(#paint3_linear_1_33)"
        d="M36.165 20.51L16.687 9.716c-1.147-.627-2.155-.55-2.774.083L30.533 26l5.632-5.49z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_33"
          x1="29.066"
          x2="7.256"
          y1="40.677"
          y2="18.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF"></stop>
          <stop offset="0.007" stopColor="#00A1FF"></stop>
          <stop offset="0.26" stopColor="#00BEFF"></stop>
          <stop offset="0.512" stopColor="#00D2FF"></stop>
          <stop offset="0.76" stopColor="#00DFFF"></stop>
          <stop offset="1" stopColor="#00E3FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_33"
          x1="45.112"
          x2="12.85"
          y1="25.998"
          y2="25.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000"></stop>
          <stop offset="0.409" stopColor="#FFBD00"></stop>
          <stop offset="0.775" stopColor="orange"></stop>
          <stop offset="1" stopColor="#FF9C00"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_33"
          x1="33.103"
          x2="3.526"
          y1="23.015"
          y2="-7.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44"></stop>
          <stop offset="1" stopColor="#C31162"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_33"
          x1="9.73"
          x2="22.937"
          y1="51.771"
          y2="38.225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071"></stop>
          <stop offset="0.069" stopColor="#2DA771"></stop>
          <stop offset="0.476" stopColor="#15CF74"></stop>
          <stop offset="0.801" stopColor="#06E775"></stop>
          <stop offset="1" stopColor="#00F076"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CHPlay;