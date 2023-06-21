import React, { useEffect} from 'react'
import { usePlayer1Store } from '../../stores/player1';
import TradesList from '../Helpers/TradesList';
const TradeAction = () => {
    const { checkTrades} = usePlayer1Store();
    useEffect(() => {
        checkTrades();
    }, [ checkTrades])
  return (
      <div className='mt-3 ml-3 text-3xl text-left'>Trades:
          <TradesList/>
      </div>
  )
}

export default TradeAction