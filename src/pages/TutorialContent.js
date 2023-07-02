import React, { useState } from "react";
import stringToAnimal from "../components/Helpers/AnimalStringToObject";
import TradingSheet from "../components/TradingSheet";
import cheatSheetPng from "../images/cheat_sheet.png";
const TutorialContent = (props) => {
  return (
    <div className="text-4xl w-full flex flex-col items-center">
      <div className="text-6xl mt-12 bg-red-500 text-white w-2/3 border-8 border-black  rounded-lg font-caprasimo py-5 ">
        {props.page === 1 && <span>Welcome to SuperFarmer</span>}
        {props.page === 2 && <span>Turn:</span>}
      </div>
      <div className="w-[90%] bg-white border-black border-8 mt-12 bg-gradient-to-br from-yellow-700 to-orange-400 text-white font-carrotfarm">
        {props.page === 1 && (
          <div className="text-6xl font-caprasimo py-6 px-6 leading-15">
            {" "}
            You are a Farmer and Your goal is to collect animals.
            <div className="mt-6">
              If you collect one of each kind you will win.
            </div>
            <div className="flex justify-between px-10 py-10">
              {["r", "s", "p", "c", "h"].map((animal) => (
                <div>{stringToAnimal(animal, 200)}</div>
              ))}
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="flex ">
            <div className="flex flex-col border-r-8 items-center border-black w-1/2  bg-gradient-to-br from-green-600 to-teal-400">
              <div className="flex-wrap font-carrotfarm   py-6 text-white px-3 ">
                First thing you can do in your round is trade your animals for
                others.
              </div>
              <div className=" w-full h-full flex items-center  justify-center "><img className="py-6  w-1/4" src={cheatSheetPng} alt={"Trades"} /></div>
              
            </div>
            <div className="font-carrotfarm flex flex-col  justify-center gap-8 w-1/2 bg-gradient-to-br from-yellow-700 to-teal-400">
              <div className="flex justify-center gap-20 px-12 pt-24 ">
                <div className="p-3 border-8 border-black   bg-white">
                  {stringToAnimal("r", 200)}
                </div>
                <div className="p-3 border-8 border-black bg-white ">
                  {stringToAnimal("r", 200)}
                </div>
              </div>
              <div className="px-3 py-8   border-black ">
                Then you roll two dices to see what animals you get.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialContent;
