import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage5 = () => {
  return (
    <div className="text-5xl leading-15 text-white font-skranji font-bold  flex flex-col items-center">
      <div className="bg-[#e2525c] py-6 border-black border-b-8 w-full">
        YOU WON'T GET MORE THEN 10 ANIMALS OF ONE KIND FROM ROLLING.
      </div>

      <div className={`text-6xl mx-5 bg-white w-1/2 flex-col pb-3 border-4 border-black my-12`}>
        <div className="w-full py-3 px-10 bg-[#e2525c] text-4xl text-white border-black border-b-4">
          Player 1
        </div>
        <div className="px-5 py-3 text-4xl text-black">Animals:</div>
        <div className="border-black border-2 border-dashed mx-5 text-xl px-10 pt-4 pb-4 flex justify-between">
          {["r", "r", "r", "r", "r","r","r","r","r","r"].map((animal) => (
            <div>{stringToAnimal(animal, 50)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPage5;