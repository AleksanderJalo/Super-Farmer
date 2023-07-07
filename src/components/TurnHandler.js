import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import diceRollHandler from "./Helpers/diceRollHandler";
const TurnHandler = () => {
  const { farm, turn, leftSpin, rightSpin, setFarm } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [leftAnimal, setLeftAnimal] = useState(null);
  const [rightAnimal, setRightAnimal] = useState(null);
  useEffect(() => {
    if (
      phase === "trade" &&
      leftSpin[turn] !== null &&
      rightSpin[turn] !== null
    ) {
      setLeftAnimal(leftSpin[turn]);
      setRightAnimal(rightSpin[turn]);
      setPhase("afterRoll"); 
    }

    if (phase === "afterRoll") {
      const newFarm = diceRollHandler(leftAnimal, rightAnimal, farm[turn]);
      setFarm(newFarm);
      setPhase("endPrepare");
    }

    if (phase === "endPrepare") {
      console.log("end");
    }
  }, [phase, leftSpin, rightSpin, leftAnimal, rightAnimal, farm, turn]);
  return <div>TurnHandler</div>;
};

export default TurnHandler;
