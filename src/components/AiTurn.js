import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import SpinWheel from "./SpinWheel";
import stringToAnimal from "./Helpers/AnimalStringToObject";
const AiTurn = (props) => {
  const { canTrade, turn, checkTrades, nextTurn } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [text, setText] = useState("");
  const [win, setWin] = useState(null);
  const [leftSpin, setLeftSpin] = useState(null);
  const [rightSpin, setRightSpin] = useState(null);
  const [startCleaning, setStartCleaning] = useState(false);
  const cleanup = () => {
    setLeftSpin(null);
    setRightSpin(null);
    setPhase("trade");
    nextTurn();
  }
  useEffect(() => {
    checkTrades();
    if (canTrade[turn].includes(true)) {
      //Here add ai trade
    } else if (phase === "trade") {
      setText(`Player ${turn + 1} did not trade.`);
      setTimeout(() => {
        setPhase("roll");
        setStartCleaning(false);
      }, 1000);
      setTimeout(() => {
        setPhase("end");
      }, 4500);
    }
    if (phase === "end") {
      setWin(null);
      if (leftSpin === rightSpin) {
        setWin(stringToAnimal(leftSpin));
      }
      if (!startCleaning) {
        setStartCleaning(true);
        setTimeout(() => {
          cleanup();
          props.cleanup();
        }, 1000);
      }
      
    }
  }, [setPhase, phase, turn, canTrade, checkTrades, setWin]);

  const afterSpinHandler = (isLeft, animal) => {
    if (isLeft) {
      setLeftSpin(animal);
    } else {
      setRightSpin(animal);
    }
  };

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
            <SpinWheel
              isHuman={false}
              isLeft={true}
              afterSpinHandler={afterSpinHandler}
            />
            <SpinWheel
              isHuman={false}
              isLeft={false}
              afterSpinHandler={afterSpinHandler}
            />
          </div>
          <div className="pb-2">Bot is Spinning...</div>
        </div>
      )}
      {phase === "end" && win && (
        <div className="text-3xl flex flex-col gap-3 items-center border-4 border-black pt-2">
          Player {turn + 1} won{" "}
          <div className="mb-6 border-4 border-black p-2 bg-green-600">
            {win}
          </div>
        </div>
      )}
      {phase === "end" && !win && (
        <div className="text-3xl py-6 border-4 border-black">
          Player {turn + 1} won nothing.
        </div>
      )}
    </div>
  );
};

export default AiTurn;
