import React, { useEffect, useState } from "react";
import { ReactComponent as Cow } from "../images/cow.svg";
import { ReactComponent as Fox } from "../images/fox.svg";
import { ReactComponent as Horse } from "../images/horse.svg";
import { ReactComponent as Pig } from "../images/pig.svg";
import { ReactComponent as Rabbit } from "../images/rabbit.svg";
import { ReactComponent as Sheep } from "../images/sheep.svg";
import { ReactComponent as Wolf } from "../images/wolf.svg";
import { ReactComponent as QuestionMark } from "../images/questionSpin.svg";
import SpinButton from "./SpinButton";
const SpinWheel = (props) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinTime, setSpinTime] = useState(-10001);
  const [didLeftSpin, setDidLeftSpin] = useState(false);
  const [didRightSpin, setDidRightSpin] = useState(false);

  useEffect(() => {
    const animals = ["r", "s", "p", "h", "w", "c", "f"];
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
        case "c":
          return <Cow />;
        case "f":
          return <Fox />;
        default:
          return;
      }
    };

    const changeAnimal = () => {
      interval = setInterval(() => {
        setAnimal(rollAnimal());
        setSpinTime((prev) => prev - 1 / 25);
      }, 50);
    };

    if (spinTime > 0) {
      changeAnimal();
      return () => clearInterval(interval);
    }
    if (-1000 < spinTime && spinTime <= 0) {
      setSpinTime(-10001);

      if (props.isLeft === true) {
        const leftAnimals = [
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Sheep />,
          <Sheep />,
          <Sheep />,
          <Pig />,
          <Horse />,
          <Wolf />,
        ];
        setAnimal(leftAnimals[Math.floor(Math.random() * 12)]);
        setDidLeftSpin(true);
      } else {
        const rightAnimals = [
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Rabbit />,
          <Sheep />,
          <Sheep />,
          <Pig />,
          <Pig />,
          <Cow />,
          <Fox />,
        ];
        setAnimal(rightAnimals[Math.floor(Math.random() * 12)]);
        setDidRightSpin(true);
      }
    }
  }, [setIsSpinning, isSpinning, spinTime, props.isLeft]);

  const [animal, setAnimal] = useState(<QuestionMark/>);
  const spinHandler = () => {
    setSpinTime(1);
  };
  return (
    <div className="flex flex-col">
      <div
        className={`h-[140px] w-[140px] ml-2 border-4 border-black pl-[15px] pt-4 ${
          props.isLeft && didLeftSpin ? "bg-green-700" : ""
        } ${!props.isLeft && didRightSpin ? "bg-green-700" : ""}`}
      >
        {animal}
      </div>
      <SpinButton onClick={spinHandler} isLeft={ props.isLeft } didLeftSpin={didLeftSpin} didRightSpin={didRightSpin} />
    </div>
  );
};

export default SpinWheel;
