import React from "react";
import { ReactComponent as Cow } from "../images/cow.svg";
import { ReactComponent as Horse } from "../images/horse.svg";
import { ReactComponent as Pig } from "../images/pig.svg";
import { ReactComponent as Rabbit } from "../images/rabbit.svg";
import { ReactComponent as Sheep } from "../images/sheep.svg";
import { ReactComponent as SmallDog } from "../images/smallDog.svg";
import { ReactComponent as BigDog } from "../images/bigDog.svg";

const TradingSheet = () => {
  return (
    <div className="absolute top-5 left-[480px] text-4xl bg-white flex flex-col border-black border-4">
      <div className="bg-[#e2525c] px-4 py-4 border-b-4 border-black text-white whitespace-nowrap">
        Cheat Sheet
      </div>
      <div className="p-2 flex gap-2 justify-center border-b-4 border-black">
        6 <span className="text-3xl mt-1">x</span>
        <Rabbit className="h-[35px] w-[35px] " />
        = 1<span className="text-3xl mt-1">x</span>
        <Sheep className="h-[35px] w-[35px]" />
      </div>
      <div className="p-2 flex gap-2 justify-center border-b-4 border-black">
        1<span className="text-3xl mt-1">x</span>
        <Pig className="h-[35px] w-[35px] " />= 2
        <span className="text-3xl mt-1">x</span>
        <Sheep className="h-[35px] w-[35px]" />
      </div>
      <div className="p-2 flex gap-2 justify-center border-b-4 border-black">
        1<span className="text-3xl mt-1">x</span>
        <Cow className="h-[35px] w-[35px] " />= 3
        <span className="text-3xl mt-1">x</span>
        <Pig className="h-[35px] w-[35px]" />
      </div>
      <div className="p-2 flex gap-2 justify-center border-b-4 border-black">
        1<span className="text-3xl mt-1">x</span>
        <Horse className="h-[35px] w-[35px] " />= 2
        <span className="text-3xl mt-1">x</span>
        <Cow className="h-[35px] w-[35px]" />
      </div>
      <div className="p-2 flex gap-2 justify-center border-b-4 border-black">
        1<span className="text-3xl mt-1">x</span>
        <SmallDog className="h-[35px] w-[35px] " />= 1
        <span className="text-3xl mt-1">x</span>
        <Sheep className="h-[35px] w-[35px]" />
      </div>
      <div className="p-2 flex gap-2 justify-center">
        1<span className="text-3xl mt-1">x</span>
        <BigDog className="h-[35px] w-[35px] " />= 1
        <span className="text-3xl mt-1">x</span>
        <Cow className="h-[35px] w-[35px]" />
      </div>
    </div>
  );
};

export default TradingSheet;
