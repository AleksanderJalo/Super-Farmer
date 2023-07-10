import React from "react";
import { usePlayer1Store } from "../stores/player1";

const TradeButton = (props) => {
  const { deleteAnimal, addMultipleAnimals } = usePlayer1Store();
  const tradeHandler = () => {
    if (props.enabled) {
      switch (props.whichTrade) {
        case 0:
          deleteAnimal("r", 6);
          addMultipleAnimals("s", 1);
          props.phaseHandler();
          break;
        case 1:
          deleteAnimal("s", 1);
          addMultipleAnimals("r", 6);
          props.phaseHandler();
          break;
        case 2:
          deleteAnimal("p", 1);
          addMultipleAnimals("s", 2);
          props.phaseHandler();
          break;
        case 3:
          deleteAnimal("s", 2);
          addMultipleAnimals("p", 1);
          props.phaseHandler();
          break;
        case 4:
          deleteAnimal("c", 1);
          addMultipleAnimals("p", 3);
          props.phaseHandler();
          break;
        case 5:
          deleteAnimal("p", 3);
          addMultipleAnimals("c", 1);
          props.phaseHandler();
          break;
        case 6:
          deleteAnimal("h", 1);
          addMultipleAnimals("c", 2);
          props.phaseHandler();
          break;
        case 7:
          deleteAnimal("c", 2);
          addMultipleAnimals("h", 1);
          props.phaseHandler();
          break;
        case 8:
          deleteAnimal("sd", 1);
          addMultipleAnimals("s", 1);
          props.phaseHandler();
          break;
        case 9:
          deleteAnimal("s", 1);
          addMultipleAnimals("sd", 1);
          props.phaseHandler();
          break;
        case 10:
          deleteAnimal("bd", 1);
          addMultipleAnimals("c", 1);
          props.phaseHandler();
          break;
        case 11:
          deleteAnimal("c", 1);
          addMultipleAnimals("bd", 1);
          props.phaseHandler();
          break;

      }
     
    }
  };
  return (
    <div
      onClick={tradeHandler}
      className={`text-xl border-4 border-black mb-1 px-2 py-1 flex items-center rounded-md  text-white cursor-pointer ${
        props.enabled ? "bg-red-600 hover:bg-red-500" : "bg-gray-700"
      }`}
    >
      Trade
    </div>
  );
};

export default TradeButton;
