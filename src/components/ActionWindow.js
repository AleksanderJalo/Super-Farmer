import React, { useEffect, useState } from "react";
import SpinWheel from "./SpinWheel";
import { usePlayer1Store } from "../stores/player1";
import TradeAction from "./Actions/TradeAction";

const ActionWindow = (props) => {
  const { leftSpin, rightSpin, addAnimal, setLeftSpin, setRightSpin, turn, nextTurn } = usePlayer1Store();
  const [tradingPhase, setTradingPhase] = useState(true);
  const phaseHandler = (phaseChange) => {
    setTradingPhase(false);
  }

   useEffect(() => {

    if (leftSpin[turn] !== null && rightSpin[turn] !== null) {
      if (leftSpin[turn] === rightSpin[turn]) {
          addAnimal(leftSpin[turn]);
          setLeftSpin(null);
          setRightSpin(null);
          nextTurn();
      }
    }
  });
  return (
    <div className="text-black border-4 border-black bg-white text-4xl ">
      <div className="w-full bg-green-600 px-4 py-3 text-white border-b-0 border-black">
        {tradingPhase ? <div> Player {turn % 4 + 1} : Trade Phase</div> : <div> Player {turn % 4 + 1} : Rolling Phase</div>}
      </div>

      {tradingPhase ? <TradeAction phaseHandler={phaseHandler} /> : <div className="flex justify-center gap-10 mt-4 mb-4 p-4">
        <SpinWheel isLeft={true} />
        <SpinWheel isLeft={false} />
      </div>}
    </div>
  );
};

export default ActionWindow;
