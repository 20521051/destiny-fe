import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function PaypalIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#179BD7"
        d="M30.845 12.193l-.1.577c-1.312 6.701-5.766 9.008-11.473 9.008h-2.904a1.412 1.412 0 00-1.392 1.193l-1.491 9.426-.418 2.665a.736.736 0 00.736.855h5.15a1.233 1.233 0 001.233-1.034v-.259l.955-6.145v-.337a1.233 1.233 0 011.233-1.055h.775c4.992 0 8.89-1.988 9.943-7.954a6.72 6.72 0 00-1.034-5.966 4.911 4.911 0 00-1.213-.974z"
      ></path>
      <path
        fill="#222D65"
        d="M29.473 11.656l-.616-.159-.657-.12a16.11 16.11 0 00-2.545-.178h-7.756a1.233 1.233 0 00-1.213 1.054l-1.65 10.44v.298a1.411 1.411 0 011.392-1.193h2.903c5.708 0 10.162-2.307 11.474-9.008 0-.2 0-.398.1-.577a6.943 6.943 0 00-1.074-.457l-.358-.1z"
      ></path>
      <path
        fill="#253B80"
        d="M16.667 12.233a1.233 1.233 0 011.213-1.054h7.755a16.1 16.1 0 012.565.179l.657.12.616.158h.298c.37.123.73.276 1.074.458a6.324 6.324 0 00-1.332-5.688C28.04 4.736 25.377 4 21.976 4h-9.943a1.412 1.412 0 00-1.392 1.193l-4.096 26.23a.855.855 0 00.835.974h6.105l1.531-9.724 1.65-10.44z"
      ></path>
    </svg>
  );
}

export default PaypalIcon;