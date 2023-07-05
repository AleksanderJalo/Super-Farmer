import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage4 = () => {
  return (
    <div className="font-skranji">
      <div className="bg-[#e2525c] py-6 border-black border-b-8 text-white text-4xl">
        FOR EVERY PAIR YOU HAVE YOU GET EXTRA ANIMAL.
      </div>
      <div className="flex flex-col justify-center items-center py-12  ">
        <div className=" border-8 border-black flex w-1/2">
          <div className="w-1/2 border-r-8 border-black">
            <div className="bg-[#e2525c] border-b-8 border-black text-white py-6">
              IF YOU HAVE
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                4 x <span className="ml-2">{stringToAnimal("r", 100)}</span>
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                3 x <span className="ml-3">{stringToAnimal("s", 100)}</span>
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6">
                1 x <span className="ml-2">{stringToAnimal("p", 100)}</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-[#e2525c] border-b-8 border-black text-white py-6">
              YOU GET
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                2 x <span className="ml-2">{stringToAnimal("r", 100)}</span>
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6 border-black border-b-8">
                1 x <span className="ml-3">{stringToAnimal("s", 100)}</span>
              </div>
              <div className="flex items-center bg-white w-full justify-center py-6">
                0 x <span className="ml-2">{stringToAnimal("p", 100)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage4;
