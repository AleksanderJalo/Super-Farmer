import React from "react";
import { ReactComponent as Pig } from "./pig.svg";
const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      
      <div className="flex flex-col gap-4 items-center font-moonkids logo">
        <div className="text-7xl text-white">SUPER</div>
        <Pig />
        <div className="text-8xl text-yellow-400">FARMER</div>
      </div>
      
    </div>
  );
};

export default Logo;
