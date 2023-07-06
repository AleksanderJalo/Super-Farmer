import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage4 = () => {
  return (
    <div className="font-skranji">
      <div className="bg-[#e2525c] py-6 border-black border-b-8 text-white text-4xl">
        YOU CAN ALSO ROLL BAD ANIMALS.
      </div>
      <div className="flex flex-col justify-center items-center py-12  ">
        <div className=" border-8 border-black flex w-1/2">
          <div className="w-1/3 border-r-8 border-black">
            <div className="bg-[#e2525c] border-b-8 border-black text-white py-6">
              IF YOU ROLL
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                {stringToAnimal("f", 100)}
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6 ">
            <span className="ml-3">{stringToAnimal("w", 100)}</span>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-[#e2525c] border-b-8 border-black text-white py-6">
              YOU LOOSE
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8 h-1/2">
                ALL <span className="ml-2">{stringToAnimal("r", 100)}</span> - 1
              </div>
              <div className="flex items-center bg-white w-full justify-center border-black h-[150px]">
                ALL <span className="ml-3">{stringToAnimal("s", 30)}</span> <span className="ml-3">{stringToAnimal("p", 30)}</span> <span className="ml-3">{stringToAnimal("c", 30)}</span>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-[#e2525c] border-b-8 border-l-8 border-black text-white py-6">
              OR
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8 border-l-8">
                <span className="ml-2">{stringToAnimal("sd", 100)}</span>
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6 border-black  border-l-8">
                <span className="ml-3">{stringToAnimal("bd", 100)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage4;
