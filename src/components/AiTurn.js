import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../stores/player1";
import SpinWheel from "./SpinWheel";
import stringToAnimal from "./Helpers/AnimalStringToObject";
import { whatTrade, changeText } from "./Helpers/AiTrade";
const AiTurn = (props) => {
  const propsCleanup = props.cleanup;
  const {
    traded,
    setTraded,
    turn,
    checkTrades,
    nextTurn,
    farm,
    addMultipleAnimals,
    deleteAnimal,
  } = usePlayer1Store();
  const [phase, setPhase] = useState("trade");
  const [win, setWin] = useState(null);
  const [leftSpin, setLeftSpin] = useState(null);
  const [rightSpin, setRightSpin] = useState(null);
  const [startCleaning, setStartCleaning] = useState(false);
  const [tradeText, setTradeText] = useState("");
  const cleanup = () => {
    setLeftSpin(null);
    setRightSpin(null);
    setPhase("trade");
    setTraded();
    nextTurn();
  };

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
      if (rightSpin === "f") {
        if (farm[turn].includes("sd")) {
          deleteAnimal("sd", 1);
        } else {
          if (farm[turn].filter((x) => x === "r").length > 0) {
            deleteAnimal("r", farm[turn].filter((x) => x === "r").length - 1);
          }
        }
      }
      if (leftSpin === "w") {
        if (farm[turn].includes("bd")) {
          deleteAnimal("bd", 1);
        } else {
          if (farm[turn].filter((x) => x === "c").length >= 0) {
            deleteAnimal("c", farm[turn].filter((x) => x === "c").length);
          }
          if (farm[turn].filter((x) => x === "s").length >= 0) {
            deleteAnimal("s", farm[turn].filter((x) => x === "s").length);
          }
          if (farm[turn].filter((x) => x === "p").length >= 0) {
            deleteAnimal("p", farm[turn].filter((x) => x === "p ").length);
          }
        }
      }
      if (leftSpin === rightSpin) {
        setWin(stringToAnimal(leftSpin));
      }
      setLeftSpin(null);
      setRightSpin(null);
      if (!startCleaning) {
        setStartCleaning(true);
        setTimeout(() => {
          cleanup();
          propsCleanup();
        }, 1000);
      }
    }
  }, [phase, turn, setWin, setStartCleaning]);

  const afterSpinHandler = (isLeft, animal) => {
    if (isLeft) {
      setLeftSpin(animal);
    } else {
      setRightSpin(animal);
    }
  };

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
