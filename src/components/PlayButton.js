import React from "react";
import { ReactComponent as PlaySvg } from "./play-circle-svgrepo-com.svg";
const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="font-plaguard flex shadow-2xl border-4 transition ease-in-out duration-400  border-black text-white group"
    >
      <div className="bg-red-800 border-r-4 border-black group-hover:bg-red-900 p-1">
        <PlaySvg />
      </div>
      <div className="text-5xl pt-2.5 grow bg-red-700 group-hover:bg-red-800">PLAY</div>
    </div>
  );
};

export default Button;
