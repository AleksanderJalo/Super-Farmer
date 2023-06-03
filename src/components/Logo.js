import React from "react";
import { ReactComponent as Pig } from "./pig.svg";
const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border-8 border-black p-4 bg-gradient-to-t from-green-600 via-orange-600 to-blue-600 rounded-xl z-10">
      <div className="flex flex-col gap-4 items-center font-moonkids">
        <div className="text-transparent logo bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-8xl">
          Super
        </div>
        <Pig />
        <div className="text-transparent logo bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 text-8xl">
          FARMER
        </div>
      </div>
    </div>
  );
};

export default Logo;
