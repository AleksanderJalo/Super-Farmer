import React, { useEffect, useState } from "react";
import { usePlayer1Store } from "../../stores/player1";
import { ReactComponent as Sheep } from "../../images/sheep.svg";
import { ReactComponent as Rabbit } from "../../images/rabbit.svg";
import { ReactComponent as Pig } from "../../images/pig.svg";
import { ReactComponent as Cow } from "../../images/cow.svg";
import { ReactComponent as SmallDog } from "../../images/smallDog.svg";
import { ReactComponent as BigDog } from "../../images/bigDog.svg";
import { ReactComponent as Horse } from "../../images/horse.svg";
import TradeButton from "../TradeButton";

const TradesList = (props) => {
  const { canTrade, turn, checkTrades } = usePlayer1Store();
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    checkTrades()
    const tradesArray = canTrade[turn];
    setTrades(tradesToList(tradesArray, props.phaseHandler));
    console.log(trades);
    setTimeout(() => {
      if (!tradesArray.includes(true)) {
        props.phaseHandler();
      }
    }, 200);
  }, [setTrades]);

  return <div className="flex flex-col items-center text-3xl">{trades}</div>;
};

export default TradesList;

const tradesToList = (trades, phaseHandler) => {
  const tradeList = [];
  if (trades[0] === true || trades[1] === true) {
    tradeList.push(
      <div
        key={"aa"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[0] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={0}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          1 x <Sheep className="w-[40px] h-[40px] pb-2" />
          <div className="mr-2">=</div> 6 x{" "}
          <Rabbit className="w-[40px] h-[40px] pb-2" />
          {trades[1] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={1}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }
  if (trades[2] === true || trades[3] === true) {
    tradeList.push(
      <div
        key={"ab"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[2] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={2}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          2 x<Sheep className="w-[40px] h-[40px] pb-2" />
          <div className="mr-2">=</div> 1 x{" "}
          <Pig className="w-[45px] h-[45px] pb-2" />
          {trades[3] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={3}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }
  if (trades[4] === true || trades[5] === true) {
    tradeList.push(
      <div
        key={"ac"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[4] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={4}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          3 x <Pig className="w-[45px] h-[45px] pb-2" />
          <div className="mr-2">=</div> 1 x{" "}
          <Cow className="w-[40px] h-[40px] pb-2" />
          {trades[5] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={5}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }
  if (trades[6] === true || trades[7] === true) {
    tradeList.push(
      <div
        key={"af"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[6] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={6}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          2 x <Cow className="w-[45px] h-[45px] pb-2" />
          <div className="mr-2">=</div> 1 x{" "}
          <Horse className="w-[40px] h-[40px] pb-2" />
          {trades[7] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={7}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }
  if (trades[8] === true || trades[9] === true) {
    tradeList.push(
      <div
        key={"ag"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[8] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={8}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          1 x<Sheep className="w-[45px] h-[45px] pb-2" />
          <div className="mr-2">=</div>
          1 x <SmallDog className="w-[50px] h-[50px] pb-2" />
          {trades[9] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={9}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }
  if (trades[10] === true || trades[11] === true) {
    tradeList.push(
      <div
        key={"az"}
        className="flex justify-center  border-black border-t-4 w-full py-2 px-6"
      >
        <div className="flex gap-4 justify-center pt-2  ">
          {trades[10] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={10}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
          1 x
          <Cow className="w-[45px] h-[45px] pb-2" />
          <div className="mr-2">=</div>
          1 x <BigDog className="w-[50px] h-[50px] pb-2" />
          {trades[11] === true ? (
            <TradeButton
              enabled={true}
              whichTrade={11}
              phaseHandler={phaseHandler}
            />
          ) : (
            <TradeButton enabled={false} />
          )}
        </div>
      </div>
    );
  }

  return tradeList;
};
