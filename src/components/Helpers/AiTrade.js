import React, { useEffect } from 'react'
import { usePlayer1Store } from '../../stores/player1'
const AiTrade = () => {
    const { turn, canTrade, farm } = usePlayer1Store();
    const trades = canTrade[turn];
    const botFarm = farm[turn]
    useEffect(() => {
        if (!botFarm.includes("bd")) {
            if (trades[11]) {
                console.log("dog from sheep")
                return;
            }
        }
        console.log(trades)
        if (!botFarm.includes("sm")) {
            if (trades[9]) {
                console.log("dog from sheep")
                return;
            }
        }
        if (!botFarm.includes("h")) {
            if (trades[7]) {
                console.log("horse from cow");
                return;
            }
        }
        if (!botFarm.includes("c")) {
            if (trades[5]) {
                console.log("cow from pig");
                return;
            } else {
                const horsesCount = botFarm.filter(animal => animal === "h").length;
                if (horsesCount > 1) {
                    if (trades[6]) {
                        console.log("cow from horse");
                        return;
                    }
                }
            }
        }
        
    })
  return (
    <div>AiTrade</div>
  )
}

export default AiTrade