import React, {useState, useLayoutEffect} from "react";
import Button from "@mui/material/Button";

interface Customized {
  boxShadow?: string;
  onClick?: () => void;
  background?: string;
  padding?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: string;
  title?: string;
}

export default function CustomizedButtons({boxShadow, onClick, background, padding, color, fontSize, borderRadius, title}: Customized) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [textColor,setTextColor] = useState<string>(color || "#fff");
  const [backgroundColor,setBackgroundColor] = useState<string>(background || "linear-gradient(-90deg, rgb(168, 85, 247), rgb(236, 72, 153))");
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };
  useLayoutEffect(()=>{
    hovered ? setTextColor("#333") : setTextColor("#fff");
    hovered ? setBackgroundColor("#f5f5f5") : setBackgroundColor("linear-gradient(-90deg, rgb(168, 85, 247), rgb(236, 72, 153))");
  },[hovered])
  return (
    <Button
      onClick={onClick}
      style={{
        textTransform: "none",
        boxShadow: boxShadow || "none",
        background: backgroundColor,
        padding: padding || "10px 40px",
        color: textColor,
        fontSize: fontSize || 16,
        borderRadius: borderRadius || "25px",
        border: hovered ? "1px solid #333" : "1px solid #e3e3e3",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
    </Button>
  );
}
