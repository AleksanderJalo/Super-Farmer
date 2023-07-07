import React, { useEffect, useState } from "react";
import { ReactComponent as QuestionMark } from "../images/questionSpin.svg";
import SpinButton from "./SpinButton";
import { usePlayer1Store } from "../stores/player1";
import stringToAnimal from "./Helpers/AnimalStringToObject";

const SpinWheel = (props) => {
  const { setLeftSpin, setRightSpin } = usePlayer1Store();
  const [aiStartSpin, setAiStartSpin] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinTime, setSpinTime] = useState(-10001);
  const [didLeftSpin, setDidLeftSpin] = useState(false);
  const [didRightSpin, setDidRightSpin] = useState(false);

  useEffect(() => {
    if (props.isHuman === false && !aiStartSpin) {
      setAiStartSpin(true);

      if (props.isLeft) {
        spinHandler();
      } else {
        setTimeout(() => {
          spinHandler();
        }, 200);
      }
    }
    const animals = ["r", "s", "p", "h", "w", "c", "f"];
    let interval;
    const rollAnimal = () => {
      const animalRolled = animals[Math.floor(Math.random() * animals.length)];
      return stringToAnimal(animalRolled, 100);
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
          "r",
          "r",
          "r",
          "r",
          "r",
          "r",
          "s",
          "s",
          "s",
          "p",
          "h",
          "w",
        ];
        const rolledAnimal = leftAnimals[Math.floor(Math.random() * 12)];
        setAnimal(stringToAnimal(rolledAnimal, 100));
        setDidLeftSpin(true);

        setLeftSpin(rolledAnimal);

      } else {
        const rightAnimals = [
          "r",
          "r",
          "r",
          "r",
          "r",
          "r",
          "s",
          "s",
          "p",
          "p",
          "c",
          "f",
        ];
        const rolledAnimal = rightAnimals[Math.floor(Math.random() * 12)];
        setAnimal(stringToAnimal(rolledAnimal, 100));

        setDidRightSpin(true);

        setRightSpin(rolledAnimal);

      }
    }
  }, [setIsSpinning, isSpinning, spinTime, props.isLeft]);

  const [animal, setAnimal] = useState(<QuestionMark />);
  const spinHandler = () => {
    setSpinTime(1);
  };
  return (
    <div className="flex flex-col">
      <div
        className={`h-[140px] w-[140px] ml-2 border-4 border-black pl-[15px] pt-3 ${
          props.isLeft && didLeftSpin ? "bg-green-700" : ""
        } ${!props.isLeft && didRightSpin ? "bg-green-700" : ""}`}
      >
        {animal}
      </div>
      {props.isHuman && (
        <SpinButton
          onClick={props.isHuman === true ? spinHandler : () => {}}
          isLeft={props.isLeft}
          didLeftSpin={didLeftSpin}
          didRightSpin={didRightSpin}
        />
      )}
    </div>
  );
};

export default SpinWheel;
