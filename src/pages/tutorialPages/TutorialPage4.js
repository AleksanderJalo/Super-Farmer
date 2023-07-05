import React from "react";
import stringToAnimal from "../../components/Helpers/AnimalStringToObject";
const TutorialPage4 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="flex px-32 items-center gap-12">
        4 <div>x</div> {stringToAnimal("r", 100)} = <div>2</div>
        <div>x</div> {stringToAnimal("r", 100)} {stringToAnimal("r", 100)}
      </div>
      <div className="flex px-32 items-center gap-12">
        2 <div>x</div> {stringToAnimal("s", 100)} = <div>1</div>
        <div>x</div> {stringToAnimal("s", 100)} {stringToAnimal("s", 100)}
      </div>
      <div className="flex px-32 items-center gap-12">
        1 x {stringToAnimal("p", 100)} = <div>0</div>
        <div>x</div> {stringToAnimal("p", 100)} {stringToAnimal("p", 100)}
      </div>
    </div>
  );
};

export default TutorialPage4;
