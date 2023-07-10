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
    checkTrades();
    const tradesArray = canTrade[turn];
    setTrades(tradesArray);
    setTimeout(() => {
      if (!tradesArray.includes(true)) {
        props.phaseHandler();
      }
    }, 200);
  }, [setTrades]);

  return (
    <div className="flex flex-col items-center text-3xl">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <div className="flex justify-center w-full py-1 px-3 h-1/3">
            <div className="flex gap-2 justify-center pt-2 ">
              {trades[0] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={0}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              1 <Sheep className="w-[40px] h-[40px] pb-2" />
              <div className="mr-2">=</div> 6{" "}
              <Rabbit className="w-[40px] h-[40px] pb-2" />
              {trades[1] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={1}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
          <div
            className="flex justify-center  w-full py-1 px-3 h-1/3"
          >
            <div className="flex gap-2 justify-center pt-2  ">
              {trades[2] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={2}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              2 <Sheep className="w-[40px] h-[40px] pb-2" />
              <div className="mr-2">=</div> 1 {" "}
              <Pig className="w-[45px] h-[45px] pb-2" />
              {trades[3] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={3}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
          <div className="flex justify-center  w-full py-1 px-3 h-1/3">
            <div className="flex gap-2 justify-center pt-2  ">
              {trades[4] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={4}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              3 <Pig className="w-[45px] h-[45px] pb-2" />
              <div className="mr-2">=</div> 1{" "}
              <Cow className="w-[40px] h-[40px] pb-2" />
              {trades[5] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={5}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex justify-center w-full py-1 px-3 h-1/3">
            <div className="flex gap-2 justify-center pt-2  ">
              {trades[6] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={6}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              2 <Cow className="w-[45px] h-[45px] pb-2" />
              <div className="mr-2">=</div> 1{" "}
              <Horse className="w-[40px] h-[40px] pb-2" />
              {trades[7] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={7}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
          <div className="flex justify-center w-full py-1 px-3 h-1/3">
            <div className="flex gap-2 justify-center pt-2  ">
              {trades[8] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={8}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              1 <Sheep className="w-[45px] h-[45px] pb-2" />
              <div className="mr-2">=</div>
              1 <SmallDog className="w-[50px] h-[50px] pb-2" />
              {trades[9] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={9}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
          <div className="flex justify-center w-full py-1 px-3 h-1/3">
            <div className="flex gap-2 justify-center pt-2  ">
              {trades[10] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={10}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
              1
              <Cow className="w-[45px] h-[45px] pb-2" />
              <div className="mr-2">=</div>
              1 <BigDog className="w-[50px] h-[50px] pb-2" />
              {trades[11] === true ? (
                <TradeButton
                  enabled={true}
                  whichTrade={11}
                  phaseHandler={props.phaseHandler}
                />
              ) : (
                <TradeButton enabled={false} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradesList;

  