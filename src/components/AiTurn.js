import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import SpinWheel from "./SpinWheel";
import stringToAnimal from "./Helpers/AnimalStringToObject";
const AiTurn = () => {
  const { canTrade, turn, checkTrades} =
    usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [text, setText] = useState("");
  const [win, setWin] = useState(null);
  const [leftSpin, setLeftSpin] = useState(null);
  const [rightSpin, setRightSpin] = useState(null);

  useEffect(() => {
    checkTrades();
    if (canTrade[turn].includes(true)) {
      //Here add ai trade
    } else if (phase === "trade") {
      setText(`Player ${turn + 1} did not trade.`);
      setTimeout(() => {
        setPhase("roll");
      }, 1000);
      setTimeout(() => {
        setPhase("end");
      }, 4500)
    }
    if (phase === "end") {
      if (leftSpin === rightSpin) {
        setWin(stringToAnimal(leftSpin));
      }
    }
  }, [setPhase, phase, turn, canTrade, checkTrades, setWin]);
  
  const afterSpinHandler = (isLeft, animal) => {
    if (isLeft) {
      setLeftSpin(animal);
    } else {
      setRightSpin(animal);
    }
  }


  return (
    <div className="flex flex-col bg-white">
      <div className="w-full text-4xl bg-green-600 px-4 py-3 text-white border-b-0 border-black border-4">
        Player {turn + 1} Turn
      </div>
      {phase === "trade" && (
        <div className="text-2xl py-6 border-4 border-black">{text}</div>
      )}
      {phase === "roll" && (
        <div className="text-4xl border-4 border-black">
          <div className="flex justify-center gap-10   p-4  py-4">
            <SpinWheel isHuman={false} isLeft={true} afterSpinHandler={afterSpinHandler} />
            <SpinWheel isHuman={false} isLeft={false} afterSpinHandler={ afterSpinHandler } />
          </div>
          <div className="pb-2">Bot is Spinning...</div>
        </div>
      )}
      {phase === "end" && win && (
        <div>
          Player {turn + 1} won {win}
        </div>
      )}
      {phase === "end" && !win && <div>Player {turn + 1} won nothing.</div>}
    </div>
  );
};

export default AiTurn;
