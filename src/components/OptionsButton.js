import React from "react";
import { ReactComponent as OptionsIcon } from "./options.svg";

const OptionsButton = () => {
  return (
    <div className="font-plaguard flex shadow-2xl border-4 transition ease-in-out duration-400  border-black text-white group z-20">
      <div className="bg-orange-700 border-r-4 border-black group-hover:bg-orange-800 p-1 px-2">
        <OptionsIcon/>
      </div>

      <div className="text-5xl pt-2.5 px-4 grow bg-orange-600 group-hover:bg-orange-700">OPTIONS</div>
    </div>
  );
};

export default OptionsButton;
