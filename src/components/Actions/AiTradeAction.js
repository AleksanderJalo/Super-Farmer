import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../../stores/player1";
import { whatTrade } from "../Helpers/AiTrade";
import { changeText } from "../Helpers/AiTrade";
const AiTradeAction = (props) => {
  const {
    setTraded,
    turn,
    checkTrades,
    farm,
    deleteAnimal,
    addMultipleAnimals,
  } = usePlayer1Store();
  const [tradeText, setTradeText] = useState("No trades.");

  useEffect(() => {
    setTraded();
    checkTrades();
    if (whatTrade(farm[turn])) {
      const tradeResult = whatTrade(farm[turn]);
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
      setTimeout(() => {
        if (tradeText.length === 0) {
          setTradeText("No trades");
        }
      }, 20);
    }
    setTimeout(() => {
      props.phaseHandler();
    }, 1000);
  }, [turn]);
  return <div className="text-3xl py-6 ">{tradeText}</div>;
};

export default AiTradeAction;
