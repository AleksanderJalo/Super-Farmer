import React from "react";

import { usePlayer1Store } from "../stores/player1";
import stringToAnimal from "./Helpers/AnimalStringToObject";

const PlayerFarm = (props) => {
    const { farm } = usePlayer1Store();
   
    return <div className="border-black border-2 border-dashed mx-5 text-xl px-2 pt-4 pb-4">
        {(farm[props.playerNr-1].length > 0) ? <div className="flex">{farm[props.playerNr-1].map(animal => <div>{stringToAnimal(animal, 30)}</div>)}</div> : <div>Empty</div>}
    </div>
};

export default PlayerFarm;
