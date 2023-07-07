import React, { useState } from "react";
import SpinWheel from "./SpinWheel";
import { usePlayer1Store } from "../stores/player1";
import TradeAction from "./Actions/TradeAction";
import stringToAnimal from "./Helpers/AnimalStringToObject";
import AiTurn from "./AiTurn";
import TurnHandler from "./TurnHandler";
const ActionWindow = () => {
  const cleanupAi = () => {
    setWin(null);
    setPhase("trade");
  };
  const {
    isHuman,
    turn,
    nextTurn,

  } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [win, setWin] = useState(null);

  const phaseHandler = () => {
    setPhase("roll");
  };
  const cleanup = () => {
    nextTurn();
  };

  return (
    <div>
      <TurnHandler />
      {isHuman[turn] && (
        <div className="text-black border-4 w-[500px] border-black bg-white text-3xl ">
          <div className="w-full bg-green-600 px-4 py-3 text-white border-b-4 border-black">
            {phase === "trade" && (
              <div> Player {(turn % 4) + 1} : Trade Phase</div>
            )}
            {(phase === "roll" || phase === "end") && (
              <div> Player {(turn % 4) + 1} : Rolling Phase</div>
            )}
          </div>
          {phase === "trade" && <TradeAction phaseHandler={phaseHandler} />}
          {phase === "roll" && (
            <div className="flex justify-center gap-10 mt-4 mb-2 p-4">
              <SpinWheel isHuman={true} isLeft={true} />
              <SpinWheel isHuman={true} isLeft={false} />
            </div>
          )}

          {phase === "end" && (
            <div className="m-8 flex flex-col items-center">
              <div>Congratulations you won </div>
              <div className="p-2 mt-2 border-4 border-black bg-green-600">
                {stringToAnimal(win, 100)}
              </div>
              <div
                className="border-4 border-black rounded-lg p-2 bg-red-600 text-white hover:bg-red-500 cursor-pointer mt-6 "
                onClick={cleanup}
              >
                End Turn
              </div>
            </div>
          )}
          {phase === "afterRoll" && !win && (
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
      )}
      {!isHuman[turn] && <AiTurn cleanup={cleanupAi} />}
    </div>
  );
};

export default ActionWindow;
