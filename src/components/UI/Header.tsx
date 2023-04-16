import React, { useState } from "react";
import { DestinyIcon } from "../icons";
import { SearchBar } from "../form";

const Header = () => {
    const [input, setInput] = useState<string>("");
    const searchHandler = ()=>{
        setInput(input + '1');
    }
  return (
    <header className="flex w-1440 h-200 top-0 left-0 border-b-slate-300 border-b-2 bg-white justify-between p-3">
      <div className="flex text-center">
        <DestinyIcon initialSize={64}></DestinyIcon>
        <h1>DESTINY</h1>
      </div>
      <div><SearchBar onSearch={searchHandler}/></div>
      <button className="bg-cyan-200 rounded-xl w-40 h-30">Login</button>
    </header>
  );
};

export default Header;
