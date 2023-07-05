import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
import cheatSheetPng from "../../images/cheat_sheet.png";
const TutorialPage2 = () => {
  return (
    <div className="flex font-bold">
      <div className="flex flex-col border-r-8 border-black w-1/2   text-white">
        <div className="flex-wrap font-skranji   py-6  px-3 bg-[#e2525c] border-black border-b-8">
          First thing you can do in your round is trade your animals for others.
        </div>
        <div className=" w-full h-full flex  justify-center ">
          <img className="py-6  w-1/4" src={cheatSheetPng} alt={"Trades"} />
        </div>
      </div>
      <div className="font-skranji flex flex-col  justify-between w-1/2">
        <div className="flex justify-center gap-20 px-12 pt-24 ">
          <div className="p-3 border-8 border-black   bg-green-600">
            {stringToAnimal("r", 200)}
          </div>
          <div className="p-3 border-8 border-black bg-green-600 ">
            {stringToAnimal("r", 200)}
          </div>
        </div>
        <div className="px-3 py-6 border-black border-t-8 bg-[#e2525c] text-white">
          Then you roll two dices to see what animals you get.
        </div>
      </div>
    </div>
  );
};

export default TutorialPage2;
