import React from "react";
import { AttributeProps } from "../../@types/attribute.type";

const SideBar = ({styleCss}: AttributeProps)=>{
    return(
        <aside className={`w-56 border-r-slate-300 border-r-2 text-center items-center ${styleCss}`}>
            <div className="border-b-slate-300 border-b-2 m-5">avatar</div>
            <nav className="flex flex-col justify-between">
                <ul>
                    <li>home</li>
                    <li>story</li>
                    <li>rank</li>
                </ul>
                <div>mode</div>
            </nav>
        </aside>
    );
};

export default SideBar;