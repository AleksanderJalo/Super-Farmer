import React, { useEffect } from 'react'
import { usePlayer1Store } from '../../stores/player1'
const AiTrade = () => {
    const { turn, canTrade, farm } = usePlayer1Store();
    const trades = canTrade[turn];
    const botFarm = farm[turn]
    useEffect(() => {
        const horsesCount = botFarm.filter(animal => animal === "h").length;
        const cowCount = botFarm.filter(animal => animal === "c").length;
        const pigCount = botFarm.filter(animal => animal === "p").length;
        const sheepCount = botFarm.filter(animal => animal === "s").length;

        if (!botFarm.includes("bd")) {
            if (trades[11]) {
                console.log("dog from cow")
                return;
            }
        }
        console.log(trades)
        if (!botFarm.includes("sd")) {
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
                if (horsesCount > 1) {
                    if (trades[6] ) {
                        console.log("cow from horse");
                        return;
                    }
                }
            }
        }
        if (!botFarm.includes("p")) {
            if (trades[3]) {
                console.log("pig from sheep")
                return;
            } else {
                if (horsesCount > 0 && cowCount > 1 && trades[4]) {
                    console.log("3 pig from cow")
                    return;
                }
            }
        }

        if (!botFarm.includes("s")){
            if (trades[0]) {
                console.log("sheep from rabbit");
                return;
            } else {
                if (horsesCount > 0 && cowCount > 0 && pigCount > 1 && trades[2]) {
                    console.log("sheep from pig");
                    return;
                }
            }
        }

        if (!botFarm.includes("r")) {
            if (horsesCount > 0 && cowCount > 0 && pigCount > 0 && sheepCount > 1 && trades[1]) {
                console.log("rabbit from sheep");
            }
            
        }
    })
  return (
    <div>AiTrade</div>
  )
}

export default AiTrade