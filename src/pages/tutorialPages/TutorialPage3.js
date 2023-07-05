import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage3 = () => {
  return (
    <div>
      <div className="px-3 py-8 text-5xl font-skranji bg-[#e2525c] text-white border-black border-b-8 h-1/5">
        {" "}
        AFTER ROLLING COUNT ANIMALS IN FARM AND ON DICES.
      </div>
      <div className="">
        <div>
          <div className="w-full flex items-center ">
            <div
              className="w-1/2 flex justify-center"
            >
              <div className={`text-6xl mx-12 my-6 bg-white pb-3 border-4 border-black w-full`}>
                <div className="w-full py-3 bg-[#e2525c] text-4xl text-white border-black border-b-4">
                  Player 1
                </div>
                <div className="px-5 py-3 text-4xl">Animals:</div>
                <div className="border-black border-2 border-dashed mx-2 text-xl px-3 pt-4 pb-4 flex justify-between gap-2">
                  {["r", "r", "r", "s", "s", "p"].map((animal) => (
                    <div>{stringToAnimal(animal, 80)}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center gap-32">
              <div className="p-4 border-8 border-black bg-green-600">
                {stringToAnimal("r", 150)}
              </div>
              <div className="p-4 pl-6 border-8 border-black bg-green-600">
                {stringToAnimal("s", 150)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-12 gap-12 justify-center">
          <div className="flex px-6 items-center  gap-3 bg-white border-black border-8 py-3">
            4 <div className="w-1/3">x</div> {stringToAnimal("r", 100)}
          </div>
          <div className="flex px-6 items-center gap-3 bg-white border-black border-8 py-3">
            3 <div className="w-1/3">x</div> {stringToAnimal("s", 100)}
          </div>
          <div className="flex px-6 items-center gap-3 bg-white border-black border-8 py-3">
            1 <div className="w-1/3">x</div> {stringToAnimal("p", 100)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage3;
