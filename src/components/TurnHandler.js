import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import diceRollHandler from "./Helpers/diceRollHandler";
const TurnHandler = () => {
  const { farm, turn, isHuman, leftSpin, rightSpin, addAnimal, deleteAnimal } =
    usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [leftAnimal, setLeftAnimal] = useState(null);
  const [rightAnimal, setRightAnimal] = useState(null);
  const [getAnimals, setGetAnimals] = useState([]);
  const [looseAnimals, setLooseAnimals] = useState([]);
  useEffect(() => {
    if (
      leftSpin[turn] !== null &&
      rightSpin[turn] !== null &&
      phase === "trade"
    ) {
      console.log(leftSpin[turn]);
      console.log(rightSpin[turn]);
      setLeftAnimal(leftSpin[turn]);
      setRightAnimal(rightSpin[turn]);
      setPhase("afterRoll");
    }
    if (phase === "afterRoll") {
      const { get, loose } = diceRollHandler(
        leftAnimal,
        rightAnimal,
        farm[turn]
      );
      setGetAnimals(get);
      setLooseAnimals(loose);
      setPhase("endPrepare");
    }
    if (phase === "endPrepare") {
    }
    //   if (phase === "endPrepare") {
    //       console.log("aaa")

    //   if (getAnimals) {
    //     if (getAnimals.length > 0) {
    //       for (const animal of getAnimals) {
    //         addAnimal(animal);
    //       }
    //     }
    //     if (looseAnimals) {
    //       console.log(looseAnimals);
    //       if (looseAnimals.length > 0) {
    //         for (const looseAnimal of looseAnimals) {
    //           deleteAnimal(looseAnimal, 1);
    //         }
    //       }
    //     }
    //   }

    //   if (looseAnimals && getAnimals) {
    //     setPhase("end");
    //   }
    // }
    if (phase === "end") {
      console.log("end");
    }
  });
  return <div>TurnHandler</div>;
};

export default TurnHandler;
