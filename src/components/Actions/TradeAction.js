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
      <div className="flex justify-end"><div className="border-4 border-black w-1/4 m-3 rounded-xl bg-amber-500 hover:bg-amber-400 cursor-pointer" onClick={props.phaseHandler}>SKIP</div></div>
      
    </Fragment>
  );
};

export default TradeAction;
