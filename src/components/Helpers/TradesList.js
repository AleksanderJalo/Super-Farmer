import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../../stores/player1";
import stringToAnimal from "./AnimalStringToObject";
import { ReactComponent as Sheep } from "../../images/sheep.svg";
import { ReactComponent as Rabbit } from "../../images/rabbit.svg";
import TradeButton from "../TradeButton";

const TradesList = () => {
  const { canTrade, turn } = usePlayer1Store();
  const tradesArray = canTrade[turn];
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    setTrades(tradesToList(tradesArray));
  }, [tradesArray, setTrades]);

  return <div className="flex flex-col items-center text-3xl">{trades}</div>;
};

export default TradesList;

const tradesToList = (trades) => {
  const tradeList = [];
  if (trades[0] === true) {
    tradeList.push(
      <div className="flex justify-between border-black border-t-4 w-full py-2 px-6">
        <div className="flex gap-2 justify-center pt-2  ">
          6 x <Rabbit className="w-[40px] h-[40px] pb-2" />
          to 1 x <Sheep className="w-[40px] h-[40px] pb-2" />
        </div>
        <TradeButton />
      </div>
    );
  }
  if (trades[1] === true) {
    tradeList.push(
      <div className="flex justify-between border-black border-t-4 w-full py-2 px-6">
        <div className="flex gap-2 justify-center pt-2  ">
          1 x <Sheep className="w-[40px] h-[40px] pb-2" />
          to 6 x <Rabbit className="w-[40px] h-[40px] pb-2" />
        </div>
        <TradeButton />
      </div>
    );
  }
  if (trades[2] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  if (trades[3] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  if (trades[4] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  if (trades[5] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  if (trades[6] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  if (trades[7] === true) {
    tradeList.push(<div>6 r to sheep</div>);
  }
  return tradeList;
};
