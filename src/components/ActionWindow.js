import React, { useEffect, useState } from "react";
import SpinWheel from "./SpinWheel";
import { usePlayer1Store } from "../stores/player1";
import TradeAction from "./Actions/TradeAction";
import AiTradeAction from "./Actions/AiTradeAction";
import TurnHandler from "./TurnHandler";
import farmDifference from "./Helpers/FarmDifference";
import EndTurnDisplay from "./EndTurnDisplay";
import didWin from "./Helpers/didWin";
const ActionWindow = () => {
  const { isHuman, turn, nextTurn, farm } = usePlayer1Store();
  const [oldFarm, setOldFarm] = useState(null);
  const [phase, setPhase] = useState("trade");
  const [animalsBalance, setAnimalsBalance] = useState([]);
  const [didSomeoneWin, setDidSomeoneWin] = useState(false);
  useEffect(() => {
    if (phase === "afterRoll") {
      setTimeout(() => {
        setPhase("end");
      }, 800);
    }
  }, [phase]);
  useEffect(() => {
    setAnimalsBalance([]);
  }, [turn]);
  const phaseHandler = () => {
    if (didWin(farm[turn])) {
      setDidSomeoneWin(true);
    }
    setPhase("roll");
    const farmToChange = [...farm[turn]];
    setOldFarm(farmToChange);
  };
  const afterRollHandler = () => {
    const finalObject = farmDifference(oldFarm, farm[turn]);
    setAnimalsBalance(finalObject);
    setPhase("afterRoll");
  };
  const cleanup = () => {
    nextTurn();
    setPhase("trade");
  };

  return (
    <React.Fragment>
      {didSomeoneWin && <div className="bg-white border-8 border-black text-4xl p-6">Player {turn % 4 + 1} won</div>}
      {!didSomeoneWin && (
        <div>
          <TurnHandler key={"turnHand"} afterRoll={afterRollHandler} />
          {
            <div className="text-black border-4 w-[500px] border-black bg-white text-3xl ">
              <div className="w-full bg-green-600 px-4 py-3 text-white border-b-4 border-black">
                {phase === "trade" && (
                  <div> Player {(turn % 4) + 1} : Trade Phase</div>
                )}
                {(phase === "roll" || phase === "afterRoll") && (
                  <div> Player {(turn % 4) + 1} : Rolling Phase</div>
                )}
                {phase === "end" && (
                  <div> Player {(turn % 4) + 1} : End Phase</div>
                )}
              </div>
              {phase === "trade" && isHuman[turn] && (
                <TradeAction phaseHandler={phaseHandler} />
              )}
              {phase === "trade" && !isHuman[turn] && (
                <AiTradeAction phaseHandler={phaseHandler} />
              )}
              {(phase === "roll" || phase === "afterRoll") && isHuman[turn] && (
                <div className="flex justify-center gap-10 mt-4 mb-2 p-4">
                  <SpinWheel key={"spin1"} isHuman={true} isLeft={true} />
                  <SpinWheel key={"spin2"} isHuman={true} isLeft={false} />
                </div>
              )}
              {(phase === "roll" || phase === "afterRoll") &&
                !isHuman[turn] && (
                  <div className="flex justify-center gap-10 mt-4 mb-2 p-4">
                    <SpinWheel key={"spin1"} isHuman={false} isLeft={true} />
                    <SpinWheel key={"spin2"} isHuman={false} isLeft={false} />
                  </div>
                )}

              {phase === "end" && (
                <div className="m-8 flex flex-col items-center">
                  {animalsBalance.length > 0 && (
                    <div>
                      <EndTurnDisplay display={animalsBalance} />
                    </div>
                  )}
                  {animalsBalance.length === 0 && (
                    <div className="py-3 mb-3">
                      Player {(turn % 4) + 1} won nothing.
                    </div>
                  )}
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
      )}
    </React.Fragment>
  );
};

export default ActionWindow;
