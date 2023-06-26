import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import SpinWheel from "./SpinWheel";
const AiTurn = () => {
  const { canTrade, turn, checkTrades } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [text, setText] = useState("");
  useEffect(() => {
    checkTrades();

    console.log(text);
    if (canTrade[turn].includes(true)) {
      //Here add ai trade
    } else {
      setText(`Player ${turn + 1} did not trade.`);
      setTimeout(() => {
        setPhase("roll");
      }, 1000);
    }
  }, [setPhase, phase, turn, canTrade, checkTrades]);
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
            <SpinWheel isHuman={false} isLeft={true} />
            <SpinWheel isHuman={false} isLeft={false} />
                  </div>
                  <div className="pb-2">Bot is Spinning...</div>
        </div>
      )}
    </div>
  );
};

export default AiTurn;
