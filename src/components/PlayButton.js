import React from "react";
import { ReactComponent as PlaySvg } from "./play-circle-svgrepo-com.svg";
const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="font-plaguard  gap-3 flex justify-center rounded-full shadow-2xl border-4 transition ease-in-out duration-300 bg-red-700 border-black py-2 text-white hover:bg-red-800"
    >
      <div>
        <PlaySvg />
      </div>
      <div className="text-5xl pt-2">PLAY</div>
    </div>
  );
};

export default Button;
