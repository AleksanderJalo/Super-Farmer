import React, { Fragment, useEffect } from "react";
import { usePlayer1Store } from "../../stores/player1";
import TradesList from "../Helpers/TradesList";
const TradeAction = (props) => {
  const { checkTrades } = usePlayer1Store();
  useEffect(() => {
    checkTrades();
  }, [checkTrades]);
  return (
    <Fragment>
      <TradesList phaseHandler={ props.phaseHandler } />
      <div className="flex justify-end"><div className="border-4 border-black  px-3 m-2 rounded-xl bg-amber-500 hover:bg-amber-400 cursor-pointer text-2xl" onClick={props.phaseHandler}>SKIP</div></div>
      
    </Fragment>
  );
};

export default TradeAction;
