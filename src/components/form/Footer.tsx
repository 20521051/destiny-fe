import { useState } from "react";
import {Logo} from "../../assets"
import { ImageButton } from "../UI";

const Footer = () => {
  const [menu, setMenu] = useState<string[]>();
  return (
    <footer className="w-full h-full bg-white">
      <div className="w-1078 h-666 left-182 top-100">
        <div>
          <p className="h-108 left-22.5 right-22.57 top-calc(50% - 108px/2 - 279.5px) font-bold text-35 leading-143 text-center font-sans text-blue-dark">
            Destiny
          </p>
          <Logo></Logo>
          <div>
            <ImageButton
              
            ></ImageButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
