import React from "react";
import { ReactComponent as Pig } from "./pig.svg";
const Logo = () => {
  const hex = (number) => {
    number = number.toString(16);
    return number.length === 1 ? "0" + number : number;
  };

  const gradientChanger = (word, firstColor, secondColor) => {
    const finished = [];
    const ratioOne = 1 / word.length;

    for (let i = 0; i < word.length; i++) {
      let ratio = ratioOne * i;
      const r = Math.ceil(
        parseInt(firstColor.substring(0, 2), 16) * ratio +
          parseInt(secondColor.substring(0, 2), 16) * (1 - ratio)
      );
      const g = Math.ceil(
        parseInt(firstColor.substring(2, 4), 16) * ratio +
          parseInt(secondColor.substring(2, 4), 16) * (1 - ratio)
      );
      const b = Math.ceil(
        parseInt(firstColor.substring(4, 6), 16) * ratio +
          parseInt(secondColor.substring(4, 6), 16) * (1 - ratio)
      );
      var middle = hex(r) + hex(g) + hex(b);
      const className = `text-[${middle}]`
      finished.push(<span className={className}>{ word.charAt(i)}</span>)
    }
    return finished;
  };
  console.log();
  

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col gap-4 items-center font-moonkids"> 
        <div className="text-transparent logo bg-clip-text bg-gradient-to-r  from-yellow-400 to-yellow-600 text-8xl">
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
