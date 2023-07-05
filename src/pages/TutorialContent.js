import React from "react";
import stringToAnimal from "../components/Helpers/AnimalStringToObject";
import cheatSheetPng from "../images/cheat_sheet.png";
const TutorialContent = (props) => {
  return (
    <div className="text-4xl w-full flex flex-col items-center">
      <div className="text-6xl mt-12 bg-red-500 text-white w-2/3 border-8 border-black  rounded-lg font-caprasimo py-5 ">
        {props.page === 1 && <span>Welcome to SuperFarmer</span>}
        {props.page === 2 && <span>Turn:</span>}
      </div>
      <div className="w-[90%]  border-black border-8 mt-12 font-carrotfarm relative wood ">
        {props.page === 1 && (
          <div className="text-4xl py-6 px-6 leading-15 text-black font-carrotfarm">
            {" "}
            You are a farmer and your goal is to collect animals.
            <div className="my-6">
              If you collect one of each kind you will win.
            </div>
            <div
              className={`text-6xl ml-5 bg-white pb-3 border-4 border-black `}
            >
              <div className="w-full py-3 px-10 bg-[#e2525c] text-4xl text-white border-black border-b-4">
                Player 1
              </div>
              <div className="px-5 py-3 text-4xl">Animals:</div>
              <div className="border-black border-2 border-dashed mx-5 text-xl px-10 pt-4 pb-4 flex justify-between">
                {["r", "s", "p", "c", "h"].map((animal) => (
                  <div>{stringToAnimal(animal, 200)}</div>
                ))}
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="flex ">
            <div className="flex flex-col border-r-8 items-center border-black w-1/2   text-black">
              <div className="flex-wrap font-carrotfarm   py-6  px-3">
                First thing you can do in your round is trade your animals for
                others.
              </div>
              <div className=" w-full h-full flex items-center  justify-center ">
                <img
                  className="py-6  w-1/4"
                  src={cheatSheetPng}
                  alt={"Trades"}
                />
              </div>
            </div>
            <div className="font-carrotfarm flex flex-col  justify-center gap-8 w-1/2 wood">
              <div className="flex justify-center gap-20 px-12 pt-24 ">
                <div className="p-3 border-8 border-black   bg-green-600">
                  {stringToAnimal("r", 200)}
                </div>
                <div className="p-3 border-8 border-black bg-green-600 ">
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
