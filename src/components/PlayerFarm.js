import React from "react";

import { usePlayer1Store } from "../stores/player1";
import stringToAnimal from "./Helpers/AnimalStringToObject";

const PlayerFarm = (props) => {
    const { farm } = usePlayer1Store(); 
    return <div className="border-black border-2 border-dashed mx-5 text-xl px-2 pt-4 pb-4">
        {(farm[props.playerNr-1].length > 0) ? <div className="flex gap-2 flex-wrap max-w-[400px] ">{farm[props.playerNr-1].map(animal => <div  key={Math.random()}>{farm[props.playerNr-1].length > 24?stringToAnimal(animal, 30) :stringToAnimal(animal, 40)}</div>)}</div> : <div>Empty</div>}
    </div>
};

export default PlayerFarm;
