import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import SpinWheel from "./SpinWheel";
import diceRollHandler from "./Helpers/diceRollHandler";
import { whatTrade, changeText } from "./Helpers/AiTrade";
const AiTurn = (props) => {
  const propsCleanup = props.cleanup;
  const {
    traded,
    setTraded,
    turn,
    setFarm,
    checkTrades,
    nextTurn,
    leftSpin,
    rightSpin,
    setLeftSpin,
    setRightSpin,
    farm,
    addMultipleAnimals,
    deleteAnimal,
  } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [win, setWin] = useState(null);

  const [startCleaning, setStartCleaning] = useState(false);
  const [tradeText, setTradeText] = useState("");

  useEffect(() => {
    if (phase === "trade" && !traded[turn]) {
      setTraded();
      setPhase("preroll");
      checkTrades();
      if (whatTrade(farm[turn])) {
        const tradeResult = whatTrade(farm[turn]);
        setStartCleaning(false);
        deleteAnimal(tradeResult[0], tradeResult[2]);
        addMultipleAnimals(tradeResult[1], tradeResult[3]);
        setTradeText(
          changeText(
            tradeResult[0],
            tradeResult[1],
            tradeResult[2],
            tradeResult[3],
            turn
          )
        );
      } else {
        setPhase("preroll");
        setTradeText("No trades");
        setStartCleaning(false);
      }
    }
    if (phase === "preroll") {
      setTimeout(() => {
        setPhase("roll");
      }, 1000);
    }
    if (phase === "roll") {
      setTimeout(() => {
        setPhase("end");
      }, 4500);
    }

    if (phase === "end") {
      setWin(null);
      console.log(farm[turn]);
      const newFarm = diceRollHandler(
        leftSpin[turn],
        rightSpin[turn],
        farm[turn]
      );
      setFarm(newFarm);
      console.log(newFarm);
      if (!startCleaning) {
        setStartCleaning(true);
        setTimeout(() => {
          propsCleanup();
        }, 1000);
      }
    }
    return () => {
      setPhase("trade");
      setTraded();
      nextTurn();
      setLeftSpin(null);
      setRightSpin(null);
    };
  }, [phase, turn, setWin, setStartCleaning, ...leftSpin, ...rightSpin, leftSpin, rightSpin]);

  return (
    <div className="flex flex-col bg-white">
      <div className="w-[500px] text-4xl bg-green-600  py-3 text-white border-b-0 border-black border-4">
        Player {turn + 1} Turn
      </div>
      {phase === "preroll" && (
        <div className="text-3xl py-6 border-4 border-black">{tradeText}</div>
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
