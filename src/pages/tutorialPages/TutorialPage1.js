import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage1 = () => {
  return (
    <div className="text-5xl leading-15 text-white font-skranji font-bold">
      <div className="bg-[#e2525c] py-6 border-black border-b-8">
        You are a farmer and your goal is to collect animals.
        <div className="mt-6">
          If you collect one of each kind you will win.
        </div>
      </div>

      <div className={`text-6xl mx-5 bg-white pb-3 border-4 border-black my-12`}>
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
  );
};

export default TutorialPage1;
