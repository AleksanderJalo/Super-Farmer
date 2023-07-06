import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage1 = () => {
  return (
    <div className="text-5xl leading-15 text-white font-skranji font-bold  flex flex-col items-center">
      <div className="bg-[#e2525c] py-6 border-black border-b-8 w-full">
        YOU ARE A FARMER AND YOUR GOAL IS TO COLLECT ANIMALS.
        <div className="mt-6">
          IF YOU COLLECT ONE OF EACH KIND YOU WIN!
        </div>
      </div>

      <div className={`text-6xl mx-5 bg-white w-1/2 flex-col pb-3 border-4 border-black my-12`}>
        <div className="w-full py-3 px-10 bg-[#e2525c] text-4xl text-white border-black border-b-4">
          Player 1
        </div>
        <div className="px-5 py-3 text-4xl text-black">Animals:</div>
        <div className="border-black border-2 border-dashed mx-5 text-xl px-10 pt-4 pb-4 flex justify-between">
          {["r", "s", "p", "c", "h"].map((animal) => (
            <div>{stringToAnimal(animal, 100)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPage1;
