import React, { useEffect, useState } from 'react'
import { usePlayer1Store } from '../../stores/player1'
const TradesList = () => {
    const { canTrade, turn } = usePlayer1Store();
    const tradesArray = canTrade[turn];
    const [trades, setTrades] = useState([]);
    useEffect(() => {
        setTrades(tradesToList(tradesArray))
    }, [ tradesArray, setTrades])
    
  return (
      <div>{ trades }</div>
  )
}

export default TradesList;


const tradesToList = (trades) => {
    const tradeList = []
    if (trades[0] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[1] === true) {
        tradeList.push(<div>1 sheep to 6 rabbit</div>)
    }
    if (trades[2] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[3] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[4] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[5] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[6] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    if (trades[7] === true) {
        tradeList.push(<div>6 r to sheep</div>)
    }
    return tradeList;
}