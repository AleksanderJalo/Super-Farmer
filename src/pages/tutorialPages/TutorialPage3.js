import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage3 = () => {
  return (
    <div>
      <div className="px-3 py-8 text-5xl font-skranji bg-[#e2525c] text-white border-black border-b-8 h-1/5">
        {" "}
        AFTER ROLLING. <br />
        YOU GET AN ANIMAL FOR EVERY PAIR YOU HAVE.
      </div>
      <div className="">
        <div className="flex">
        <div className="flex flex-col items-center justify-center gap-10 w-1/2 ">
            <div className=" flex  justify-center">
              <div
                className={`text-6xl mx-12 my-6 bg-white pb-3 border-4 border-black w-full`}
              >
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
          <div className="font-skranji w-1/2 border-black border-l-8">
            <div className="flex flex-col justify-center items-center py-12  ">
              <div className=" border-8 border-black flex w-1/2">
                <div className="w-1/2 border-r-8 border-black">
                  <div className="bg-[#e2525c] border-b-8 border-black text-white text-2xl py-6 flex-nowrap">
                    IF YOU HAVE
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                      4 x{" "}
                      <span className="ml-2">{stringToAnimal("r", 100)}</span>
                    </div>
                    <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                      3 x{" "}
                      <span className="ml-3">{stringToAnimal("s", 100)}</span>
                    </div>
                    <div className="flex items-center bg-white w-full justify-center py-6">
                      1 x{" "}
                      <span className="ml-2">{stringToAnimal("p", 100)}</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="bg-[#e2525c] border-b-8 border-black text-white text-2xl flex-nowrap py-6">
                    YOU GET
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                      2 x{" "}
                      <span className="ml-2">{stringToAnimal("r", 100)}</span>
                    </div>
                    <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                      1 x{" "}
                      <span className="ml-3">{stringToAnimal("s", 100)}</span>
                    </div>
                    <div className="flex items-center bg-white w-full justify-center py-6">
                      0 x{" "}
                      <span className="ml-2">{stringToAnimal("p", 100)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TutorialPage3;
