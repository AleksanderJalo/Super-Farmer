import React, { useEffect, useState } from "react";
import SpinWheel from "./SpinWheel";
import { usePlayer1Store } from "../stores/player1";
import TradeAction from "./Actions/TradeAction";
import stringToAnimal from "./Helpers/AnimalStringToObject";
const ActionWindow = (props) => {
  const {
    leftSpin,
    rightSpin,
    addAnimal,
    setLeftSpin,
    setRightSpin,
    turn,
    nextTurn,
  } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [afterSpin, setAfterSpin] = useState(false);
  const [win, setWin] = useState(null);

  const phaseHandler = () => {
   setPhase("roll")
  };
  const cleanup = () => {
    setLeftSpin(null);
    setRightSpin(null);
    setWin(null);
    setPhase("trade");
    nextTurn();
  };

  useEffect(() => {
    console.log(win);
    console.log(afterSpin);
    console.log(leftSpin[turn]);
    console.log(rightSpin[turn]);
    if (leftSpin[turn] !== null && rightSpin[turn] !== null) {
      setTimeout(() => {
        setPhase("end");
      }, 1000);
      if (leftSpin[turn] === rightSpin[turn]) {
        addAnimal(leftSpin[turn]);
        setWin(leftSpin[turn]);
        setLeftSpin(null);
        setRightSpin(null);
      }
    }
  });
  return (
    <div className="text-black border-4 border-black bg-white text-4xl ">
      <div className="w-full bg-green-600 px-4 py-3 text-white border-b-0 border-black">
        {phase === "trade" && <div> Player {(turn % 4) + 1} : Trade Phase</div>}
        {(phase === "roll" || phase === "end") && (
          <div> Player {(turn % 4) + 1} : Rolling Phase</div>
        )}
      </div>
      {phase === "trade" && <TradeAction phaseHandler={phaseHandler} />}
      {phase === "roll" && (
        <div className="flex justify-center gap-10 mt-4 mb-4 p-4">
          <SpinWheel isLeft={true} />
          <SpinWheel isLeft={false} />
        </div>
      )}

      {phase === "end" && win && (
        <div className="m-8 flex flex-col items-center">
          <div>Congratulations you won </div>
          <div>{stringToAnimal(win, 100)}</div>
          <div
            className="border-4 border-black rounded-lg p-2 bg-red-600 text-white hover:bg-red-500 cursor-pointer mt-6 "
            onClick={cleanup}
          >
            End Turn
          </div>
        </div>
      )}
      {phase === "end" && !win && (
        <div className="m-8 flex flex-col items-center">
          <div>Sorry, You Lost! </div>
          <div
            className="border-4 border-black rounded-lg p-2 bg-red-600 text-white hover:bg-red-500 cursor-pointer mt-6 "
            onClick={cleanup}
          >
            End Turn
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionWindow;
