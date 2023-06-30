import React from "react";
import stringToAnimal from "../components/Helpers/AnimalStringToObject";
const TutorialContent = (props) => {
  return (
    <div className="text-4xl w-full flex flex-col items-center">
      <div className="text-6xl mt-12 bg-red-500 text-white w-1/2 border-8 border-black rounded-lg font-plaguard py-5 ">
        Welcome to SuperFarmer
      </div>
      <div className="w-[90%] bg-white border-black border-8 mt-12">
        <div className="text-5xl font-caprasimo py-6 px-6 leading-15">
          {" "}
          SuperFarmer is 4 player game. Based on board game from my childhood.
          You are a farmer and Your goal is to collect animals.
        </div>
      </div>
    </div>
  );
};

export default TutorialContent;
