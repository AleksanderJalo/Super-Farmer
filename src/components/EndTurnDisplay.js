import React from "react";
import stringToAnimal from "./Helpers/AnimalStringToObject";
const EndTurnDisplay = (props) => {
    const animalNrToDiv = (animal, nr) => {
        if (nr > 0) {
            return  <div className="flex items-center border-4 border-black p-3 bg-green-500 gap-3">{ nr } x {stringToAnimal(animal,50)}</div>
        } else {
             return <div className="flex items-center border-4 border-black p-3 bg-red-500 gap-3">{ nr * (-1) } x {stringToAnimal(animal,50)}</div>
        }
    }
    return <div className="flex flex-col justify-center items-center mb-3">
        {<div className="flex gap-3 items-center mb-3">{props.display.map(x => animalNrToDiv(x[0],x[1]))}</div>}
    </div>;
};

export default EndTurnDisplay;
