import React from "react";
import { ReactComponent as PlaySvg } from "./play-circle-svgrepo-com.svg";
const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="font-plaguard cursor-pointer flex shadow-2xl border-4 transition ease-in-out border-black text-white group z-20 hover:-translate-y-1 duration-300"
    >
      <div className="bg-indigo-800 border-r-4 border-black group-hover:bg-indigo-900 p-1 px-2">
        <PlaySvg />
      </div>
      <div className="text-5xl pt-2.5 grow bg-indigo-700 group-hover:bg-indigo-800">PLAY</div>
    </div>
  );
};

export default Button;
