import React, { useEffect, useState } from "react";
import { ReactComponent as Cow } from "../images/cow.svg";
import { ReactComponent as Fox } from "../images/fox.svg";
import { ReactComponent as Horse } from "../images/horse.svg";
import { ReactComponent as Pig } from "../images/pig.svg";
import { ReactComponent as Rabbit } from "../images/rabbit.svg";
import { ReactComponent as Sheep } from "../images/sheep.svg";
import { ReactComponent as Wolf } from "../images/wolf.svg";
const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const animals = ["r", "r", "r", "r", "r", "r", "s", "s", "p", "p", "h", "w"];
  const [spinTime, setSpinTime] = useState(0);
  
  useEffect(() => {
    let interval;
    const rollAnimal = () => {
      const animalRolled = animals[Math.floor(Math.random() * animals.length)];
  
      switch (animalRolled) {
        case "r":
          return <Rabbit />;
        case "s":
          return <Sheep />;
        case "p":
          return <Pig />;
        case "h":
          return <Horse />;
        case "w":
          return <Wolf />;
      }
    };

    const changeAnimal = () => {
      if (spinTime > 0) {
        interval = setInterval(() => {
          setAnimal(rollAnimal());
          setSpinTime((prev) => prev - 1/50);
        }, 50);
      }
    }
    changeAnimal();

    return () => clearInterval(interval);
  }, [setIsSpinning, isSpinning, animals]);

  const [animal, setAnimal] = useState();
  const spinHandler = () => {
    setSpinTime(1);
  };
  return (
    <div className="flex flex-col">
      <div className="h-[140px] w-[140px] border-2 border-black pl-4 pt-3">
        {animal}
      </div>
      <button onClick={spinHandler}>spin</button>
    </div>
  );
};

export default SpinWheel;
