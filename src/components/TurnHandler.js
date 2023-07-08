import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import diceRollHandler from "./Helpers/diceRollHandler";
const TurnHandler = (props) => {
  const { farm, turn, leftSpin, rightSpin, setFarm , setLeftSpin, setRightSpin} = usePlayer1Store();
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
      setTimeout(() => {
        setLeftSpin(null);
        setRightSpin(null);
        setLeftAnimal(null);
        setRightAnimal(null);
        setPhase("roll");
        props.afterRoll();
      }, 500);
      
    } 

    if (phase === "afterRoll") {
      const newFarm = diceRollHandler(leftAnimal, rightAnimal, farm[turn]);
      setFarm(newFarm);
    }   
  }, [phase, ...leftSpin, ...rightSpin]);
  return <div ></div>;   
}; 

export default TurnHandler;
  