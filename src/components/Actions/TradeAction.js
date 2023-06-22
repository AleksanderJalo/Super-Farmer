import React, { Fragment, useEffect } from "react";
import { usePlayer1Store } from "../../stores/player1";
import TradesList from "../Helpers/TradesList";
const TradeAction = () => {
  const { checkTrades } = usePlayer1Store();
  useEffect(() => {
    checkTrades();
  }, [checkTrades]);
  return (
    <Fragment>
      <div className="mt-3 ml-3 text-3xl text-left">Trades:</div>
      <TradesList />
    </Fragment>
  );
};

export default TradeAction;
