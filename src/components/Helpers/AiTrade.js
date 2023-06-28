import React, { useEffect } from 'react'
import { usePlayer1Store } from '../../stores/player1'
const AiTrade = () => {
    const { turn, canTrade, farm, deleteAnimal, addAnimal, addMultipleAnimals } = usePlayer1Store();
    const trades = canTrade[turn];
    const botFarm = farm[turn]
    useEffect(() => {
        const horsesCount = botFarm.filter(animal => animal === "h").length;
        const cowCount = botFarm.filter(animal => animal === "c").length;
        const pigCount = botFarm.filter(animal => animal === "p").length;
        const sheepCount = botFarm.filter(animal => animal === "s").length;

        if (!botFarm.includes("bd")) {
            if (trades[11]) {
                deleteAnimal("c", 1);
                addAnimal("bd");
                return;
            }
        }
        
        if (!botFarm.includes("sd")) {
            if (trades[9]) {
                deleteAnimal("s");
                addAnimal("sd")
                return;
            }
        }
        if (!botFarm.includes("h")) {
            if (trades[7]) {
                deleteAnimal("c", 2);
                addAnimal("h");
                return;
            }
        }
        if (!botFarm.includes("c")) {
            if (trades[5]) {
                deleteAnimal("p", 3);
                addAnimal("c");
                return;
            } else {
                if (horsesCount > 1) {
                    if (trades[6] ) {
                        deleteAnimal("h", 1);
                        addMultipleAnimals("c", 2)
                        return;
                    }
                }
            }
        }
        if (!botFarm.includes("p")) {
            if (trades[3]) {
                deleteAnimal("s", 2);
                addAnimal("p");
                return;
            } else {
                if (horsesCount > 0 && cowCount > 1 && trades[4]) {
                    deleteAnimal("c", 1);
                    addMultipleAnimals("p", 3);
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
    },[farm])
  return (
    <div>AiTrade</div>
  )
}

export default AiTrade