import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import diceRollHandler from "./Helpers/diceRollHandler";
const TurnHandler = (props) => {
  const {
    farm,
    turn,
    leftSpin,
    rightSpin,
    setFarm,
    setLeftSpin,
    setRightSpin

  } = usePlayer1Store();
  const [phase, setPhase] = useState("roll");
  const [leftAnimal, setLeftAnimal] = useState(null);
  const [rightAnimal, setRightAnimal] = useState(null);
  useEffect(() => {
    if (
      phase === "roll" &&
      leftSpin[turn] !== null &&
      rightSpin[turn] !== null
    ) {
      setLeftAnimal(leftSpin[turn]);
      setRightAnimal(rightSpin[turn]);
      setPhase("afterRoll");
    }

    if (phase === "afterRoll") {
      const finalFarm= diceRollHandler(leftAnimal, rightAnimal, farm[turn]);
      setFarm(finalFarm);
      setPhase("end");
    }
    if (phase === "end") {
      setLeftSpin(null);
      setRightSpin(null);
      setLeftAnimal(null);
      setRightAnimal(null);
      props.afterRoll();
      setPhase("roll");
    }
  }, [phase, ...leftSpin, ...rightSpin, turn]);
  return <div></div>;
};

export default TurnHandler;
