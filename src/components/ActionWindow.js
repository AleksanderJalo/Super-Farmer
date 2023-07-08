import React, { useState } from "react";
import SpinWheel from "./SpinWheel";
import { usePlayer1Store } from "../stores/player1";
import TradeAction from "./Actions/TradeAction";
import stringToAnimal from "./Helpers/AnimalStringToObject";
import AiTurn from "./AiTurn";
import AiTradeAction from "./Actions/AiTradeAction";
import TurnHandler from "./TurnHandler";
const ActionWindow = () => {
  const cleanupAi = () => {
    setWin(null);
    setPhase("trade");
  };
  const { isHuman, turn, nextTurn } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [get, setWin] = useState(null);

  const phaseHandler = () => {
    setPhase("roll");
  };
  const afterRollHandler = () => {
    setPhase("end");
  };
  const cleanup = () => {
    nextTurn();
    setPhase("trade");
  };

  return (
    <div>
      <TurnHandler key={"turnHand"} afterRoll={afterRollHandler} />
      {
        <div className="text-black border-4 w-[500px] border-black bg-white text-3xl ">
          <div className="w-full bg-green-600 px-4 py-3 text-white border-b-4 border-black">
            {phase === "trade" && (
              <div> Player {(turn % 4) + 1} : Trade Phase</div>
            )}
            {(phase === "roll" || phase === "end") && (
              <div> Player {(turn % 4) + 1} : Rolling Phase</div>
            )}
          </div>
          {phase === "trade" && isHuman[turn] && (
            <TradeAction phaseHandler={phaseHandler} />
          )}
          {phase === "trade" && !isHuman[turn] && (
            <AiTradeAction phaseHandler={phaseHandler} />
          )}
          {phase === "roll" && isHuman[turn] && (
            <div className="flex justify-center gap-10 mt-4 mb-2 p-4">
              <SpinWheel key={"spin1"} isHuman={true} isLeft={true} />
              <SpinWheel key={"spin2"} isHuman={true} isLeft={false} />
            </div>
          )}
          {phase === "roll" && !isHuman[turn] && (
            <div className="flex justify-center gap-10 mt-4 mb-2 p-4">
              <SpinWheel key={"spin1"} isHuman={false} isLeft={true} />
              <SpinWheel key={"spin2"} isHuman={false} isLeft={false} />
            </div>
          )}

          {phase === "end" && (
            <div className="m-8 flex flex-col items-center">
              <div
                className="border-4 border-black rounded-lg p-4 bg-red-600 text-white hover:bg-red-500 cursor-pointer  "
                onClick={cleanup}
              >
                End Turn
              </div>
            </div>
          )}
        </div>
      }
      {!isHuman[turn]}
    </div>
  );
};

export default ActionWindow;
