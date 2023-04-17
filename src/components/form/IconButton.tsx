import React from "react";
import { FacebookIcon, AppleIcon, GoogleIcon, TwitterIcon } from "../icons";

enum typeIcon{
  'facebook',
  'apple-b',
  'apple-w',
  'google',
  'twitter',
  'pinterest',
  'telegram',
  'instagram',
  'viber',
  'home',
  'story',
  'rank',
  'dark-mode',
  'light-mode',
  '',
}
interface Props {
  type: typeIcon;
  onClick?: () => void;
}

export default function IconBtn({ type, onClick }: Props) {
  const handleCSS = () => {
    // switch (type) {
    //   case type.facebook:
    //     return "border-[1px] border-light-gray";
    //   case "trash":
    //     return "bg-scarlet";
    // }
  };

  return (
    <button onClick={onClick} className={`p-3 ${handleCSS()}`}>
      {/* {type === "trash" ? <Trash /> : <Heart />} */}
    </button>
  );
}
